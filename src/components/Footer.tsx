function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer fade-in">
      <p className="footer__title">
        Cine Xpace
      </p>

      <p className="footer__text">
        © {year} • Desenvolvido com React + TypeScript
      </p>
    </footer>
  )
}

export default Footer
