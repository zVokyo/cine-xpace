import { channels } from "../data/channels"
import { getUser } from "../utils/storage"

import { useAppHandlers } from "./useAppHandlers"
import { useAuth } from "./useAuth"
import { useChannelActions } from "./useChannelActions"
import { useChannelFilters } from "./useChannelFilters"
import { useChat } from "./useChat"
import { useChatMessages } from "./useChatMessages"
import { useCinemaMode } from "./useCinemaMode"
import { useComments } from "./useComments"
import { useFavorites } from "./useFavorites"
import { useFilters } from "./useFilters"
import { useHistory } from "./useHistory"
import { usePage } from "./usePage"
import { usePlayer } from "./usePlayer"
import { useProfile } from "./useProfile"
import { useRatings } from "./useRatings"
import { useReactions } from "./useReactions"
import { useSidebar } from "./useSidebar"
import { useTheme } from "./useTheme"
import { useToast } from "./useToast"
import { useWatchLater } from "./useWatchLater"

export function useApp() {
  const {
    loggedIn,
    setLoggedIn,
  } = useAuth()

  const {
    profile,
    updateProfile,
  } = useProfile()

  const {
    favorites,
    toggleFavorite: toggleFavoriteHook,
  } = useFavorites()

  const {
    watchLater,
    toggleWatchLater: toggleWatchLaterHook,
  } = useWatchLater()

  const {
    history,
    addToHistory,
    clearHistory: clearHistoryHook,
  } = useHistory()

  const {
    ratings,
    rateChannel: rateChannelHook,
  } = useRatings()

  const {
    comments,
    addComment: addCommentHook,
  } = useComments()

  const {
    theme,
    setTheme,
  } = useTheme()

  const {
    cinemaMode,
    setCinemaMode,
  } = useCinemaMode()

  const {
    page,
    setPage,
  } = usePage()

  const {
    search,
    setSearch,
    category,
    setCategory,
    clearFilters: clearFiltersHook,
  } = useFilters()

  const {
    sidebarOpen,
    setSidebarOpen,
  } = useSidebar()

  const {
    toast,
    setToast,
  } = useToast()

  const {
    channel,
    enterChannel,
    leaveChannel,
  } = usePlayer(addToHistory)

  const {
    messages,
    setMessages,
    clearMessages,
  } = useChatMessages()

  const {
    reactions,
    addReaction,
    clearReactions,
  } = useReactions()

  const {
    text,
    setText,
    typing,
    setTyping,
    sendMessage,
  } = useChat({
    profile,
    setMessages,
  })

  const {
    filteredChannels,
    favoriteChannels,
    watchLaterChannels,
  } = useChannelFilters(
    search,
    category,
    favorites,
    watchLater
  )

  const {
    toggleFavorite,
    toggleWatchLater,
    rateChannel,
    addComment,
  } = useChannelActions(
    setToast,
    toggleFavoriteHook,
    toggleWatchLaterHook,
    rateChannelHook,
    addCommentHook
  )

  const {
    handleClearHistory,
    handleClearFilters,
    handleSaveProfile,
    handleNotifications,
  } = useAppHandlers({
    clearHistory: clearHistoryHook,
    clearFilters: clearFiltersHook,
    updateProfile,
    setToast,
  })

  const username =
    profile.name || getUser()

  function handleLeaveChannel() {
    leaveChannel()
    setCinemaMode(false)
    setText("")
    setTyping(false)
    clearReactions()
    setToast("")
  }

  function handleLogout() {
    handleLeaveChannel()
    clearMessages()
    setSidebarOpen(false)
    setPage("home")
    setLoggedIn(false)
  }

  return {
    loggedIn,
    setLoggedIn,
    handleLogout,

    profile,
    username,

    favorites,
    watchLater,
    history,
    ratings,
    comments,

    theme,
    setTheme,

    cinemaMode,
    setCinemaMode,

    page,
    setPage,

    search,
    setSearch,
    category,
    setCategory,

    sidebarOpen,
    setSidebarOpen,

    toast,
    setToast,

    channel,
    enterChannel,
    leaveChannel,
    handleLeaveChannel,

    messages,
    clearMessages,

    text,
    setText,
    typing,
    setTyping,

    reactions,
    addReaction,
    clearReactions,

    channels,
    filteredChannels,
    favoriteChannels,
    watchLaterChannels,

    toggleFavorite,
    toggleWatchLater,
    rateChannel,
    addComment,
    sendMessage,

    handleClearHistory,
    handleClearFilters,
    handleSaveProfile,
    handleNotifications,
  }
}
