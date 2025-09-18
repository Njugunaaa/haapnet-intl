// Accessibility utilities for HAAPNET website

// Focus management for modals and navigation
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  )

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  const handleTabKey = (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }

    if (e.key === "Escape") {
      element.dispatchEvent(new CustomEvent("close-modal"))
    }
  }

  element.addEventListener("keydown", handleTabKey)
  firstElement?.focus()

  return () => {
    element.removeEventListener("keydown", handleTabKey)
  }
}

// Announce content changes to screen readers
export const announceToScreenReader = (message, priority = "polite") => {
  const announcement = document.createElement("div")
  announcement.setAttribute("aria-live", priority)
  announcement.setAttribute("aria-atomic", "true")
  announcement.className = "sr-only"
  announcement.textContent = message

  document.body.appendChild(announcement)

  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Skip link functionality
export const addSkipLink = () => {
  const skipLink = document.createElement("a")
  skipLink.href = "#main-content"
  skipLink.textContent = "Skip to main content"
  skipLink.className =
    "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"

  document.body.insertBefore(skipLink, document.body.firstChild)
}

// Reduced motion detection
export const prefersReducedMotion = () => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// High contrast mode detection
export const prefersHighContrast = () => {
  return window.matchMedia("(prefers-contrast: high)").matches
}

// Color scheme preference
export const getColorSchemePreference = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark"
  }
  return "light"
}

// Keyboard navigation helpers
export const handleArrowKeyNavigation = (items, currentIndex, orientation = "horizontal") => {
  return (e) => {
    let newIndex = currentIndex

    if (orientation === "horizontal") {
      if (e.key === "ArrowLeft") {
        newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
      } else if (e.key === "ArrowRight") {
        newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
      }
    } else {
      if (e.key === "ArrowUp") {
        newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
      } else if (e.key === "ArrowDown") {
        newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
      }
    }

    if (newIndex !== currentIndex) {
      e.preventDefault()
      items[newIndex]?.focus()
      return newIndex
    }

    return currentIndex
  }
}
