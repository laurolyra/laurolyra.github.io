interface ProjectCardProps {
  name: string
  description: string
  screenshot: string
}

export function ProjectCard({ name, description, screenshot }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-black dark:border-white overflow-hidden w-full shrink-0">
      <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
        <img
          src={screenshot}
          alt={`${name} screenshot`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
