type Props = {
  rating: number
  setRating: (value: number) => void
}

function RatingBox({ rating, setRating }: Props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>⭐ Avaliação</h3>

      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "24px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: star <= rating ? "#FFD54A" : "#555",
          }}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default RatingBox
