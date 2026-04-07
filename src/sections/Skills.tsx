import { SiReact, SiPython } from 'react-icons/si'
import { SkillBadge } from '../components/SkillBadge'

const skills = [
  { icon: SiReact, name: 'React' },
  { icon: SiPython, name: 'Python' },
]

export function Skills() {
  return (
    <section id="skills" className="px-8 py-24 max-w-5xl mx-auto w-full">
      <h2 className="text-3xl font-bold tracking-tight mb-2">Skills</h2>
      <p className="text-base mb-12">Technologies I work with.</p>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  )
}
