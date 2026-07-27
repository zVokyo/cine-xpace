export function load<T>(
  key: string,
  defaultValue: T
): T {
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

export function save<T>(
  key: string,
  value: T
): void {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    )
  } catch {
    // Ignora erros de armazenamento
  }
}

export function remove(
  key: string
): void {
  try {
    localStorage.removeItem(key)
  } catch {
    // Ignora erros de armazenamento
  }
}

export function clear(): void {
  try {
    localStorage.clear()
  } catch {
    // Ignora erros de armazenamento
  }
}
