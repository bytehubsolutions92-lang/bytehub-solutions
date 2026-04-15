import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b bg-white">
      
      {/* LOGO */}
      <h1 className="text-2xl font-bold text-[var(--primary)]">
        ByteHub Solutions
      </h1>

      {/* LINKS */}
      <div className="flex gap-8 text-sm font-medium">
        <Link href="/" className="hover:text-[var(--accent)]">Home</Link>
        <Link href="/about" className="hover:text-[var(--accent)]">About</Link>
        <Link href="/services" className="hover:text-[var(--accent)]">Services</Link>
        <Link href="/contact" className="hover:text-[var(--accent)]">Contact</Link>
      </div>

    </nav>
  );
}