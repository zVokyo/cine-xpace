const USER_KEY = "cinexpace-user"

export function getUser() {
  return localStorage.getItem(USER_KEY) || "Usuário"
}

export function saveUser(name: string) {
  localStorage.setItem(USER_KEY, name)
}

export function clearUser() {
  localStorage.removeItem(USER_KEY)
}
