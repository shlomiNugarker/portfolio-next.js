import { IconType } from 'react-icons'
import {
  FaLinkedin,
  FaGithub,
  FaMailBulk,
  // FaWhatsapp,
  FaPhone,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  // {
  //   label: 'WhatsApp',
  //   href: 'https://wa.me/972529526762,',
  //   icon: FaWhatsapp,
  // },
  {
    label: 'Phone',
    href: 'tel:0529526762',
    icon: FaPhone,
  },
  {
    label: 'Gmail',
    href: 'mailto:shlomin1231@gmail.com',
    icon: FaMailBulk,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shlomi-nugarker-b89777155/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/shlomiNugarker',
    icon: FaGithub,
  },
]
