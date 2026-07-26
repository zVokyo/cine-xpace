import { useMemo } from "react"

import { channels } from "../data/channels"

import type { Channel } from "../types"

export function useChannelFilters(
  search: string,
  category: string,
  favorites: string[],
  watchLater: string[]
) {
  const filteredChannels = useMemo<Channel[]>(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return channels.filter((channel) => {
      const matchesSearch =
        normalizedSearch === "" ||
        channel.name.toLowerCase().includes(normalizedSearch) ||
        channel.now.toLowerCase().includes(normalizedSearch) ||
        channel.category.toLowerCase().includes(normalizedSearch)

      const matchesCategory =
        category === "all" ||
        channel.category === category

      return matchesSearch && matchesCategory
    })
  }, [search, category])

  const favoriteChannels = useMemo<Channel[]>(() => {
    return channels.filter((channel) =>
      favorites.includes(channel.name)
    )
  }, [favorites])

  const watchLaterChannels = useMemo<Channel[]>(() => {
    return channels.filter((channel) =>
      watchLater.includes(channel.name)
    )
  }, [watchLater])

  return {
    filteredChannels,
    favoriteChannels,
    watchLaterChannels,
  }
}