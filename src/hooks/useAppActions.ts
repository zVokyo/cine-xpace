export function useAppActions(setToast: (message: string) => void) {
  function notify(message: string) {
    setToast(message)
  }

  return {
    notify,
  }
}
