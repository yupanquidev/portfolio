import Facebook from '@/icons/Facebook.astro'
import GitHub from "@/icons/GitHub.astro"
import Instagram from '@/icons/Instagram.astro'
import LinkedIn from '@/icons/LinkedIn.astro'
import Mail from "@/icons/Mail.astro"
import Threads from '@/icons/Threads.astro'
import TikTok from '@/icons/TikTok.astro'
import X from "@/icons/X.astro"

import type { ContactLinks } from '@/types/ContactLinks'

export const CONTACT_INFO: ContactLinks[] = [
  {
    network: "GitHub",
    link: "https://github.com/yupanquidev",
    icon: GitHub,
  },
  {
    network: "Email",
    link: "mailto:yupanquidev@gmail.com",
    icon: Mail,
  },
  {
    network: "LinkedIn",
    link: "https://linkedin.com/in/yupanquidev",
    icon: LinkedIn,
  },
  {
    network: "Instagram",
    link: "https://instagram.com/yupanquidev",
    icon: Instagram,
  },
  {
    network: "X",
    link: "https://x.com/yupanquidev",
    icon: X,
  },
  {
    network: "Facebook",
    link: "https://facebook.com/yupanquidev",
    icon: Facebook,
  },
  {
    network: "TikTok",
    link: "https://tiktok.com/@yupanquidev",
    icon: TikTok,
  },
  {
    network: "Threads",
    link: "https://threads.net/@yupanquidev",
    icon: Threads,
  }
]