import type { ReactNode } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
  CalendarDots,
  ChatCenteredDots,
  CheckCircle,
  ClipboardText,
  EnvelopeOpen,
  EnvelopeSimple,
  GearSix,
  GlobeHemisphereWest,
  Handshake,
  InstagramLogo,
  Lightbulb,
  Lightning,
  List,
  MapPin,
  MonitorPlay,
  PaperPlaneTilt,
  Phone,
  Robot,
  RocketLaunch,
  Scales,
  ShieldCheck,
  Sparkle,
  SpinnerGap,
  StarFour,
  Target,
  UsersThree,
  Wrench,
  X,
  DeviceMobile,
  ImageSquare,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"

export {
  ArrowLeft,
  ArrowRight,
  Buildings,
  CalendarDots,
  ChatCenteredDots,
  CheckCircle,
  ClipboardText,
  EnvelopeOpen,
  EnvelopeSimple,
  GearSix,
  GlobeHemisphereWest,
  Handshake,
  InstagramLogo,
  Lightbulb,
  Lightning,
  List,
  MapPin,
  MonitorPlay,
  PaperPlaneTilt,
  Phone,
  Robot,
  RocketLaunch,
  Scales,
  ShieldCheck,
  Sparkle,
  SpinnerGap,
  StarFour,
  Target,
  UsersThree,
  Wrench,
  X,
  DeviceMobile,
  ImageSquare,
  WhatsappLogo,
}

const serviceIconMap = {
  "mobile-apps": DeviceMobile,
  website: GlobeHemisphereWest,
  "rag-ai-assistant": Robot,
  "ui-ux-design": MonitorPlay,
  "poster-design": ImageSquare,
  "invitation-design": EnvelopeOpen,
  branding: Sparkle,
  maintenance: Wrench,
} as const

const valueIconMap = {
  quality: StarFour,
  innovation: Lightbulb,
  trust: Handshake,
  collaboration: UsersThree,
} as const

const categoryIconMap = {
  Website: GlobeHemisphereWest,
  "Mobile Apps": DeviceMobile,
  "RAG/AI": Robot,
  Branding: Sparkle,
  Poster: ImageSquare,
  Undangan: EnvelopeOpen,
} as const

export type ServiceIconKey = keyof typeof serviceIconMap
export type ValueIconKey = keyof typeof valueIconMap
export type CategoryIconKey = keyof typeof categoryIconMap

export function IconShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`icon-shell ${className}`.trim()}>{children}</div>
}

export function ServiceIcon({ iconKey, size = 28, className = "" }: { iconKey: ServiceIconKey; size?: number; className?: string }) {
  const Icon = serviceIconMap[iconKey]

  return <Icon size={size} weight="duotone" className={className} />
}

export function ValueIcon({ iconKey, size = 28, className = "" }: { iconKey: ValueIconKey; size?: number; className?: string }) {
  const Icon = valueIconMap[iconKey]

  return <Icon size={size} weight="duotone" className={className} />
}

export function CategoryIcon({ category, size = 28, className = "" }: { category: string; size?: number; className?: string }) {
  const Icon = categoryIconMap[category as CategoryIconKey] ?? MonitorPlay

  return <Icon size={size} weight="duotone" className={className} />
}
