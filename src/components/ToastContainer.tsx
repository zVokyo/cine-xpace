import { useEffect } from "react"
import Toast from "./Toast"

type Props = {
  message: string
  onClose: () => void
}

function ToastContainer({ message, onClose }: Props) {
  useEffect(() => {
    if (!message) return

    const timer = setTimeout(onClose, 3000)

    return () => clearTimeout(timer)
  }, [message, onClose])

  if (!message) return null

  return <Toast message={message} />
}

export default ToastContainer
