import { activeSocials } from '../data/socials'
import { YouTube, Instagram, XTwitter, TikTok, Facebook, LinkedIn, GitHub, Globe, Mail } from './Icons'
import './SocialLinks.css'

const ICONS = {
  youtube: YouTube,
  instagram: Instagram,
  x: XTwitter,
  xPersonal: XTwitter,
  tiktok: TikTok,
  facebook: Facebook,
  facebookPersonal: Facebook,
  linkedin: LinkedIn,
  github: GitHub,
  website: Globe,
  email: Mail,
}

export default function SocialLinks({ className = '', variant = 'dark', size = 18 }) {
  const socials = activeSocials()
  if (!socials.length) return null

  return (
    <div className={`socials socials--${variant} ${className}`}>
      {socials.map((s) => {
        const Icon = ICONS[s.id] || Globe
        const isMail = s.id === 'email'
        return (
          <a
            key={s.id}
            className="socials__link"
            href={s.url}
            aria-label={s.label}
            title={s.label}
            {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}
