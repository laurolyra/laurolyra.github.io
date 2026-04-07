export function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b">
      <span className="text-xl font-semibold tracking-tight">LL</span>
      <nav className="flex gap-8 text-sm font-medium">
        <a href="#about" className="hover:underline underline-offset-4">About</a>
        <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
        <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
      </nav>
    </header>
  )
}
