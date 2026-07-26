type SetToast = (
  message: string
) => void

type ToggleChannel = (
  channelName: string
) => void

type RateChannel = (
  channelName: string,
  rating: number
) => void

type AddComment = (
  channelName: string,
  comment: string
) => void

export function useChannelActions(
  setToast: SetToast,
  toggleFavoriteHook:
    ToggleChannel,
  toggleWatchLaterHook:
    ToggleChannel,
  rateChannelHook: RateChannel,
  addCommentHook: AddComment
) {
  function toggleFavorite(
    channelName: string
  ) {
    toggleFavoriteHook(channelName)

    setToast(
      "Lista de favoritos atualizada!"
    )
  }

  function toggleWatchLater(
    channelName: string
  ) {
    toggleWatchLaterHook(
      channelName
    )

    setToast(
      "Lista de assistir depois atualizada!"
    )
  }

  function rateChannel(
    channelName: string,
    rating: number
  ) {
    rateChannelHook(
      channelName,
      rating
    )

    setToast(
      `Avaliação salva: ${rating} estrela${
        rating === 1 ? "" : "s"
      }!`
    )
  }

  function addComment(
    channelName: string,
    comment: string
  ) {
    const normalizedComment =
      comment.trim()

    if (!normalizedComment) {
      setToast(
        "Digite um comentário."
      )

      return
    }

    addCommentHook(
      channelName,
      normalizedComment
    )

    setToast(
      "Comentário adicionado!"
    )
  }

  return {
    toggleFavorite,
    toggleWatchLater,
    rateChannel,
    addComment,
  }
}
