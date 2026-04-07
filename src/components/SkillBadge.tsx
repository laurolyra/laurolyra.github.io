import type { IconType } from 'react-icons'

interface SkillBadgeProps {
  icon: IconType
  name: string
}

export function SkillBadge({ icon: Icon, name }: SkillBadgeProps) {
  return (
    <div className="group flex flex-col items-center gap-2 px-5 py-4 rounded-xl border cursor-default select-none transition-all duration-200 hover:scale-105 hover:shadow-lg hover:brightness-125">
      <Icon className="w-10 h-10 transition-all duration-200 group-hover:drop-shadow-lg" size={40} />
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}
