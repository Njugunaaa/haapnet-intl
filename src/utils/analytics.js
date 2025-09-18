// Google Analytics 4 integration
export const initGA = (measurementId) => {
  if (typeof window !== "undefined" && measurementId) {
    // Load Google Analytics script
    const script = document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag

    gtag("js", new Date())
    gtag("config", measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "GA_MEASUREMENT_ID", {
      page_title: title,
      page_location: url,
    })
  }
}

// Track events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent("form_submit", "engagement", formName)
}

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent("click", "engagement", `${buttonName} - ${location}`)
}

// Track scroll depth
export const trackScrollDepth = () => {
  let maxScroll = 0
  const trackingThresholds = [25, 50, 75, 90]

  const handleScroll = () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent

      trackingThresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && maxScroll < threshold + 5) {
          trackEvent("scroll", "engagement", `${threshold}%`)
        }
      })
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true })

  return () => window.removeEventListener("scroll", handleScroll)
}
