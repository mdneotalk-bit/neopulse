// Your social media handles.
//
// 👉 Paste your full profile URL into each `url` below. Any left blank is
// hidden automatically, so you can fill them in whenever you like.

import { CHANNEL } from './videos'

export const SOCIALS = [
  // Official channel accounts
  { id: 'youtube', label: 'YouTube', url: CHANNEL.url },
  { id: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@mdneotalks' },
  { id: 'x', label: 'X (Official)', url: 'https://x.com/mdneotalk' },
  { id: 'facebook', label: 'Facebook Page', url: 'https://www.facebook.com/profile.php?id=61574281362737' },

  // Professional
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/oladimeji-sunmbola-a46301373/' },
  { id: 'github', label: 'GitHub', url: 'https://github.com/mdneotalk-bit' },

  // Personal
  { id: 'facebookPersonal', label: 'Facebook (Personal)', url: 'https://www.facebook.com/mattneo.dmj/' },
  { id: 'xPersonal', label: 'X (Personal)', url: 'https://x.com/Mattneodmj' },

  // Not set yet — fill in to make them appear:
  { id: 'instagram', label: 'Instagram', url: '' }, // e.g. 'https://instagram.com/yourhandle'
  { id: 'email', label: 'Email', url: '' }, // e.g. 'mailto:you@email.com'
  { id: 'website', label: 'Website', url: '' }, // e.g. 'https://yoursite.com'
]

export const activeSocials = () => SOCIALS.filter((s) => s.url && s.url.trim())
