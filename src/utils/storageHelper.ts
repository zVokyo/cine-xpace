export function load<T>(key: string, defaultValue: T): T {
  try {
    const value = localStorage.getItem(key)

    if (!value) {
      return defaultValue
    }

    return JSON.parse(value) as T
  } catch {
    return defaultValue
  }
}

export function save<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function remove(key: string) {
  localStorage.removeItem(key)
}

export function clear() {
  localStorage.clear()
}
