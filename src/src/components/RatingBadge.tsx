type RatingBadgeProps = {
  rating: number
}

function RatingBadge({ rating }: RatingBadgeProps) {
  if (rating === 0) return null

  return (
    <span
      style={{
        background: "#ffd700",
        color: "#111",
        padding: "4px 8px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: "bold",
        marginLeft: "8px",
      }}
    >
      ⭐ {rating}/5
    </span>
  )
}

export default RatingBadge
