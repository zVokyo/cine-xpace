export type Page =
  | "home"
  | "favorites"
  | "watchLater"

export type Theme =
  | "dark"
  | "light"

export type Channel = {
  name: string
  icon: string
  category: string
  now: string
  next: string[]
  video: string
}

export type Message = {
  user: string
  avatar: string
  text: string
}

export type Profile = {
  name: string
  avatar: string
}

export type Ratings =
  Record<string, number>

export type Comments =
  Record<string, string[]>
  