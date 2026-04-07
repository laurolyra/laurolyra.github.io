import { Skills } from './sections/Skills'

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 border-b">
        <span className="text-xl font-semibold tracking-tight">LL</span>
        <nav className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:underline underline-offset-4">About</a>
          <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
          <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
        </nav>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <section
          id="hero"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-8 py-24 max-w-5xl mx-auto w-full"
        >
          {/* Text */}
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-sm font-medium tracking-widest uppercase">
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Lauro Lyra Aguiar
            </h1>
            <h2 className="text-2xl font-medium">
              Full Stack Developer
            </h2>
            <p className="text-base leading-relaxed">
              I design and build web applications — from clean interfaces to
              solid backends. Always focused on performance, scalability, and
              great user experience.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-medium border-2 transition-opacity hover:opacity-80"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-medium border-2 transition-opacity hover:opacity-80"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Avatar placeholder */}
          <div
            className="shrink-0 w-52 h-52 md:w-64 md:h-64 rounded-full border-2"
            aria-hidden="true"
          />
        </section>

        <Skills />
      </main>
    </div>
  )
}

export default App
