import { ReactElement } from "react"
import { Home, FileInfo, MailForward } from 'tabler-icons-react'

export interface PageLink {
  name: string
  href: string
  icon: ReactElement
}

export const pageLinks: PageLink[] = [
  {
    name: 'Home',
    icon: <Home />,
    href: '/'
  },
  {
    name: 'About',
    icon: <FileInfo />,
    href: '/about'
  },
  {
    name: 'Contact',
    icon: <MailForward />,
    href: '/contact'
  }
]