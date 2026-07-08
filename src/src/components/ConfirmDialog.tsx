import Modal from "./Modal"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"

type Props = {
  open: boolean
  title: string
  message: string
  onConfirm: () => void
  onClose: () => void
}

function ConfirmDialog({ open, title, message, onConfirm, onClose }: Props) {
  return (
    <Modal open={open} title={title} onClose={onClose}>
      <p style={{ color: "#B8B8C8", lineHeight: 1.5 }}>
        {message}
      </p>

      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <SecondaryButton onClick={onClose}>
          Cancelar
        </SecondaryButton>

        <PrimaryButton onClick={onConfirm}>
          Confirmar
        </PrimaryButton>
      </div>
    </Modal>
  )
}

export default ConfirmDialog
