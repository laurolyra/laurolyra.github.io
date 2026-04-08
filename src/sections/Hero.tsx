export function Hero() {
  return (
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
            className="px-6 py-3 rounded-lg font-medium border-2 dark:border-white transition-opacity hover:opacity-80"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium border-2 dark:border-white transition-opacity hover:opacity-80"
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
  )
}
