import React, { useEffect } from "react"
import { createPortal } from "react-dom"

export function Modal({ children, isOpen = false, onCancel }) {
  const handleEscape = (event) => {
    if (event.keyCode === 27) onCancel()
  }

  useEffect(() => {
    if (isOpen) {
      if (document.body.style.overflow !== "hidden") {
        document.body.style.overflow = "hidden"
        document.body.style.width = "calc(100% - 8px)"
      }
      document.addEventListener("keydown", handleEscape, false)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape, false)

      document.body.style.overflow = null
      document.body.style.width = null
    }
  }, [handleEscape, isOpen])

  return createPortal(
    isOpen ? (
      <div className="modal modal-fade">
        <button className="modal-overlay" onClick={onCancel} />
        <div className="modal-body">
          <button className="absolute top-1 right-1" onClick={onCancel}>
            {icClose}
          </button>
          {children}
        </div>
      </div>
    ) : null,
    document.getElementById("modal-root")
  )
}

export default Modal

const icClose = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
)
