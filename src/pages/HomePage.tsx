import ChannelRow from "../components/ChannelRow"
import RecommendedSection from "../components/RecommendedSection"
import TopRatedSection from "../components/TopRatedSection"
import HistorySection from "../components/HistorySection"
import ClearHistoryButton from "../components/ClearHistoryButton"
import SearchCard from "../components/SearchCard"

import type {
  Channel,
  Ratings,
} from "../types"

type HomePageProps = {
  channels: Channel[]
  filteredChannels: Channel[]
  favoriteChannels: Channel[]
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

function HomePage({
  channels,
  filteredChannels,
  favoriteChannels,
  ratings,
  history,
  search,
  category,
  setSearch,
  setCategory,
  onEnter,
  onClearHistory,
  onClearFilters,
}: HomePageProps) {
  return (
    <>
      <RecommendedSection
        channels={channels}
        onEnter={onEnter}
      />

      <TopRatedSection
        channels={channels}
        ratings={ratings}
        onEnter={onEnter}
      />

      <HistorySection
        history={history}
        onEnter={onEnter}
      />

      {history.length > 0 && (
        <ClearHistoryButton
          onClear={onClearHistory}
        />
      )}

      <SearchCard
        search={search}
        category={category}
        setSearch={setSearch}
        setCategory={setCategory}
        onClearFilters={onClearFilters}
      />

      {favoriteChannels.length > 0 && (
        <section>
          <h2>⭐ Seus favoritos</h2>

          <ChannelRow
            channels={favoriteChannels}
            ratings={ratings}
            onEnter={onEnter}
          />
        </section>
      )}

      <section>
        <h2>🎬 Todos os canais</h2>

        <ChannelRow
          channels={filteredChannels}
          ratings={ratings}
          onEnter={onEnter}
        />
      </section>
    </>
  )
}

export default HomePage
