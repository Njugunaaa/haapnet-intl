export const handleImageError = (e) => {
  e.target.style.display = "none"
  const parent = e.target.parentElement
  if (parent) {
    parent.classList.add("dotted-bg", "flex", "items-center", "justify-center")
    parent.innerHTML = '<span class="text-gray-500 font-medium">Image Loading...</span>'
  }
}

export const createImageWithFallback = (src, alt, className = "") => {
  const img = document.createElement("img")
  img.src = src
  img.alt = alt
  img.className = className
  img.onerror = handleImageError
  return img
}
