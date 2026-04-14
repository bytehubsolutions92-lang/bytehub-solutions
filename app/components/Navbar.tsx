import Link from "next/link";

export default function Navbar() {
  return (
    <nav 
      className="flex flex-col md:flex-row md:justify-between md:items-center px-6 md:px-10 py-4"
      style={{ borderBottom: "1px solid #eee" }}
    >
      
      <h1 className="text-xl font-bold mb-2 md:mb-0">
        ByteHub Solutions
      </h1>

      <div className="flex gap-4 md:gap-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>

    </nav>
  );
}