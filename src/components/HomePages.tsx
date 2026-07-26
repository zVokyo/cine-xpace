import FavoritesPage from "./FavoritesPage"
import HomePage from "../pages/HomePage"
import WatchLaterPage from "../pages/WatchLaterPage"

import type {
  Channel,
  Page,
  Ratings,
} from "../types"

type HomePagesProps = {
  page: Page
  channels: Channel[]
  filteredChannels: Channel[]
  favoriteChannels: Channel[]
  watchLaterChannels: Channel[]
  ratings: Ratings
  history: string[]
  search: string
  category: string
  setSearch: (value: string) => void
  setCategory: (value: string) => void
  onEnter: (channelName: string) => void
  onClearHistory: () => void
  onClearFilters: () => void
}

function HomePages({
  page,
  channels,
  filteredChannels,
  favoriteChannels,
  watchLaterChannels,
  ratings,
  history,
  search,
  category,
  setSearch,
  setCategory,
  onEnter,
  onClearHistory,
  onClearFilters,
}: HomePagesProps) {
  if (page === "favorites") {
    return (
      <FavoritesPage
        channels={favoriteChannels}
        ratings={ratings}
        onEnter={onEnter}
      />
    )
  }

  if (page === "watchLater") {
    return (
      <WatchLaterPage
        channels={watchLaterChannels}
        onEnter={onEnter}
      />
    )
  }

  return (
    <HomePage
      channels={channels}
      filteredChannels={filteredChannels}
      favoriteChannels={favoriteChannels}
      ratings={ratings}
      history={history}
      search={search}
      category={category}
      setSearch={setSearch}
      setCategory={setCategory}
      onEnter={onEnter}
      onClearHistory={onClearHistory}
      onClearFilters={onClearFilters}
    />
  )
}

export default HomePages
