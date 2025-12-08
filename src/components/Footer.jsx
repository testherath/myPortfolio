export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <p>© {currentYear} Buddhila Herath. All rights reserved.</p>
        <p className="footer-email">
          <a href="mailto:buddhilalakshan12@gmail.com">buddhilalakshan12@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}