export default function Footer() {
  return (
    <footer 
      className="text-center py-6 mt-20"
      style={{ background: "var(--primary)", color: "white" }}
    >
      <p>© {new Date().getFullYear()} ByteHub Solutions</p>
    </footer>
  );
}