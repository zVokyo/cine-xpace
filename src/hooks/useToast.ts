import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

const TOAST_DURATION = 3000

export function useToast() {
  const [toast, setToastState] =
    useState("")

  const timeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    )

  const clearToast = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    setToastState("")
  }, [])

  const setToast = useCallback(
    (message: string) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      setToastState(message)

      if (!message) {
        timeoutRef.current = null
        return
      }

      timeoutRef.current = setTimeout(() => {
        setToastState("")
        timeoutRef.current = null
      }, TOAST_DURATION)
    },
    []
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return {
    toast,
    setToast,
    clearToast,
  }
}
