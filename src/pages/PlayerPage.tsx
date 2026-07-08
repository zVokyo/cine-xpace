import BackButton from "../src/components/BackButton"
import FavoriteButton from "../src/components/FavoriteButton"
import WatchLaterButton from "../src/components/WatchLaterButton"
import CinemaModeButton from "../src/components/CinemaModeButton"
import FullscreenButton from "../src/components/FullscreenButton"
import KeyboardShortcuts from "../src/components/KeyboardShortcuts"
import VolumeControl from "../src/components/VolumeControl"
import PlaybackSpeed from "../src/components/PlaybackSpeed"
import SubtitlesToggle from "../src/components/SubtitlesToggle"
import Player from "../src/components/Player"
import ProgressBar from "../src/components/ProgressBar"
import ViewersCount from "../src/components/ViewersCount"
import WatchTimer from "../src/components/WatchTimer"
import MessageCounter from "../src/components/MessageCounter"
import RatingBox from "../src/components/RatingBox"
import Reactions from "../src/components/Reactions"
import Chat from "../src/components/Chat"
import CommentsBox from "../src/components/CommentsBox"
import MiniPlayer from "../src/components/MiniPlayer"
import ToastContainer from "../src/components/ToastContainer"
import type { Channel } from "../types/channel"

type Message = {
  user: string
  avatar: string
  text: string
}

type Props = {
  channel: Channel
  cinemaMode: boolean
  favorites: string[]
  watchLater: string[]
  ratings: Record<string, number>
  comments: Record<string, string[]>
  messages: Message[]
  text: string
  typing: boolean
  reactions: string[]
  toast: string
  setText: (value: string) => void
  setTyping: (value: boolean) => void
  setReactions: (value: string[]) => void
  setToast: (value: string) => void
  onBack: () => void
  onToggleCinema: () => void
  onToggleFavorite: () => void
  onToggleWatchLater: () => void
  onRate: (value: number) => void
  onSendMessage: () => void
  onAddComment: (comment: string) => void
}

function PlayerPage({
  channel,
  cinemaMode,
  favorites,
  watchLater,
  ratings,
  comments,
  messages,
  text,
  typing,
  reactions,
  toast,
  setText,
  setTyping,
  setReactions,
  setToast,
  onBack,
  onToggleCinema,
  onToggleFavorite,
  onToggleWatchLater,
  onRate,
  onSendMessage,
  onAddComment,
}: Props) {
  return (
    <main style={{ minHeight: "100vh", background: cinemaMode ? "black" : "#09090f", color: "white", padding: cinemaMode ? "8px" : "24px" }}>
      <BackButton onBack={onBack} />
      <FavoriteButton isFavorite={favorites.includes(channel.name)} onToggle={onToggleFavorite} />
      <WatchLaterButton isSaved={watchLater.includes(channel.name)} onToggle={onToggleWatchLater} />
      <CinemaModeButton cinemaMode={cinemaMode} onToggle={onToggleCinema} />
      <FullscreenButton />
      <KeyboardShortcuts toggleCinemaMode={onToggleCinema} />
      <VolumeControl />
      <PlaybackSpeed />
      <SubtitlesToggle />

      <Player channel={channel} />
      <ProgressBar progress={65} />
      <ViewersCount count={128} />
      <WatchTimer />
      <MessageCounter count={messages.length} />
      <RatingBox rating={ratings[channel.name] || 0} setRating={onRate} />
      <Reactions reactions={reactions} setReactions={setReactions} />
      <Chat messages={messages} text={text} typing={typing} setText={setText} setTyping={setTyping} sendMessage={onSendMessage} />
      <CommentsBox comments={comments[channel.name] || []} onAddComment={onAddComment} />
      <MiniPlayer channelName={channel.name} />
      <ToastContainer message={toast} onClose={() => setToast("")} />
    </main>
  )
}

export default PlayerPage

