const KEY = "cinexpace-logged-in"

export function getLogin() {
  return localStorage.getItem(KEY) === "true"
}

export function saveLogin(value: boolean) {
  localStorage.setItem(KEY, String(value))
}
