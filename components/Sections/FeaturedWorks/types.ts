export type ProjectCategory = 
  | 'web'
  | 'mobile'
  | 'ai'
  | 'game'
  | 'design'
  | 'backend'
  | 'fullstack'
  | 'other'

export type Project = {
  id: number
  title: string
  subtitle?: string
  tags: string[]
  imgs: string[]
  videoUrl?: string
  description: string
  longDescription?: string
  linkDemo: string
  linkGitHub: string
  features?: string[]
  allowIframe?: boolean
  category?: ProjectCategory | ProjectCategory[]
  featured?: boolean
  completionDate?: string
  teamSize?: number
  clientName?: string
  testimonial?: {
    text: string
    author: string
    role?: string
  }
  techStack?: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    devops?: string[]
    other?: string[]
  }
}

export type FeaturedCardProps = {
  height: string | Record<string, string>
  src: string
  idx: number
  title: string
  description: string
  objectPosition?: string
  ctaUrl: string
  project: Project
}

export type ActionButton = {
  label: string
  url?: string
  icon: React.ReactElement
  colorScheme: string
  isExternal: boolean
  onClick?: () => void
  variant?: string
  size?: string
  tooltip?: string
  isDisabled?: boolean
}
