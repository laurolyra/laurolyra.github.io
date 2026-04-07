import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const links = [
  {
    icon: SiGithub,
    label: 'GitHub',
    handle: '@laurolyra',
    href: 'https://github.com/laurolyra',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    handle: 'Lauro Lyra Aguiar',
    href: 'https://linkedin.com/in/laurolyra',
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-8 py-24 max-w-5xl mx-auto w-full">
      <h2 className="text-3xl font-bold tracking-tight mb-2">Get in touch</h2>
      <p className="text-base mb-12 max-w-md">
        Have a project in mind or just want to connect? Reach me through any of
        the channels below.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {links.map(({ icon: Icon, label, handle, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-5 rounded-2xl border w-full sm:w-auto transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          >
            <Icon size={28} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{label}</span>
              <span className="text-sm opacity-60">{handle}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
