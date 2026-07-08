import ChannelRow from "../src/components/ChannelRow"
import RecommendedSection from "../src/components/RecommendedSection"
import TopRatedSection from "../src/components/TopRatedSection"
import HistorySection from "../src/components/HistorySection"
import ClearHistoryButton from "../src/components/ClearHistoryButton"
import SearchCard from "../src/components/SearchCard"
import type { Channel } from "../types/channel"

type Props = {
  channels: Channel[]
  filteredChannels: Channel[]
  favoriteChannels: Channel[]
  ratings: Record<string, number>
  history: string[]
  search: string
  setSearch: (value: string) => void
  category: string
  setCategory: (value: string) => void
  onEnter: (channel: string) => void
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
  setSearch,
  category,
  setCategory,
  onEnter,
  onClearHistory,
  onClearFilters,
}: Props) {
  return (
    <>
      <RecommendedSection channels={channels} onEnter={onEnter} />
      <TopRatedSection channels={channels} ratings={ratings} onEnter={onEnter} />
      <HistorySection history={history} onEnter={onEnter} />

      {history.length > 0 && (
        <ClearHistoryButton onClear={onClearHistory} />
      )}

      <SearchCard
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        onClearFilters={onClearFilters}
      />

      {favoriteChannels.length > 0 && (
        <ChannelRow channels={favoriteChannels} onEnter={onEnter} />
      )}

      <ChannelRow channels={filteredChannels} onEnter={onEnter} />
    </>
  )
}

export default HomePage

