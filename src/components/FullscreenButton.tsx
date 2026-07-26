function FullscreenButton() {
  function openFullscreen() {
    const element = document.documentElement

    if (element.requestFullscreen) {
      element.requestFullscreen()
    }
  }

  return (
    <button onClick={openFullscreen}>
      🖥️ Tela cheia
    </button>
  )
}

export default FullscreenButton
