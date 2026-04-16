import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b bg-white">
      
      {/* LOGO */}
      <Link href="/">
  <Image 
    src="/logo.png" 
    alt="ByteHub Solutions Logo"
    width={160}
    height={40}
  />
</Link>

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