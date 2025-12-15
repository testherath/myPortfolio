export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <p>© {currentYear} Buddhila Herath. All rights reserved.</p>
      </div>
    </footer>
  );
}