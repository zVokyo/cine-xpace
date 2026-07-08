export function saveLogin(username: string) {
  localStorage.setItem("cine_xpace_logged", "true")
  localStorage.setItem("cine_xpace_user", username)
}

export function removeLogin() {
  localStorage.removeItem("cine_xpace_logged")
  localStorage.removeItem("cine_xpace_user")
}

export function getLogin() {
  return localStorage.getItem("cine_xpace_logged") === "true"
}

export function getUser() {
  return localStorage.getItem("cine_xpace_user") || "Visitante"
}
