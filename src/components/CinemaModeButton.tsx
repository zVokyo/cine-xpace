type Props = {
  cinemaMode: boolean
  onToggle: () => void
}

function CinemaModeButton({ cinemaMode, onToggle }: Props) {
  return (
    <button onClick={onToggle}>
      {cinemaMode ? "Sair do modo cinema" : "🎥 Modo cinema"}
    </button>
  )
}

export default CinemaModeButton
