import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'

const projects = [
  {
    name: 'Project Alpha',
    description: 'A short description of what this project does, the problem it solves, and the tech stack used to build it.',
    screenshot: 'https://placehold.co/800x450?text=Project+Alpha',
  },
  {
    name: 'Project Beta',
    description: 'A short description of what this project does, the problem it solves, and the tech stack used to build it.',
    screenshot: 'https://placehold.co/800x450?text=Project+Beta',
  },
  {
    name: 'Project Gamma',
    description: 'A short description of what this project does, the problem it solves, and the tech stack used to build it.',
    screenshot: 'https://placehold.co/800x450?text=Project+Gamma',
  },
]

export function Projects() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + projects.length) % projects.length)
  const next = () => setCurrent((i) => (i + 1) % projects.length)

  return (
    <section id="projects" className="px-8 py-24 max-w-5xl mx-auto w-full">
      <h2 className="text-3xl font-bold tracking-tight mb-2">Projects</h2>
      <p className="text-base mb-12">A selection of things I've built.</p>

      <div className="relative">
        {/* Track */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous project"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 flex items-center justify-center w-10 h-10 rounded-full border dark:border-white bg-white dark:bg-black shadow-md hover:shadow-lg transition-shadow"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next project"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 flex items-center justify-center w-10 h-10 rounded-full border dark:border-white bg-white dark:bg-black shadow-md hover:shadow-lg transition-shadow"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`w-3 h-3 rounded-full border transition-all duration-200 cursor-pointer ${
              i === current ? 'scale-125' : 'opacity-40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
