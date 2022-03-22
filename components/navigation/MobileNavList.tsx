import { Burger, createStyles, CSSObject, MantineTheme, MediaQuery, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { FileInfo, Home, MailForward } from 'tabler-icons-react';
import { PageLink } from './pageLinks';

export interface MobileNavListProps {
  links: PageLink[]
  hiddenStyles: CSSObject
}

const useMobileNavStyles = createStyles((theme: MantineTheme) => ({
  menu: {
  },
  li: {
    '&:hover a': { color: theme.colors.violet }
  }
}))

export function MobileNavList({ hiddenStyles, links }: MobileNavListProps) {
  const [menuIsOpen, handlers] = useDisclosure(false)
  const { classes } = useMobileNavStyles()
  return (
    <MediaQuery smallerThan={8000} largerThan={'md'} styles={hiddenStyles}>
      <div>
        <Menu
          control={<Burger color={'gray'} opened={menuIsOpen} />}
          opened={menuIsOpen}
          onOpen={handlers.open}
          onClose={handlers.close}
          className={classes.menu} >
          <Menu.Label>Menu</Menu.Label>
          <Menu.Item
            className={classes.li}
            icon={<Home size={14} />}
          >
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item className={classes.li} icon={<FileInfo size={14} />}>
            <Link href="/about">About</Link>
          </Menu.Item>
          <Menu.Item className={classes.li} icon={<MailForward size={14} />}>
            <Link href="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </div>
    </MediaQuery>
  );
}
