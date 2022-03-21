import { createStyles, CSSObject, MantineTheme, MediaQuery, Text } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { PageLink } from './pageLinks';

export interface DesktopNavListProps {
  links: PageLink[]
  hiddenStyles: CSSObject
}

const useDesktopNavStyles = createStyles((theme: MantineTheme) => ({
  ul: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    margin: '0',
    padding: `0 ${theme.spacing.sm}px`,
    transition: 'all 80ms ease',
    '& > li.active': {
      color: theme.colors.violet,
      '&  a': { color: theme.colors.violet },
      '&:hover a': {
        color: theme.colors.violet,

        '& svg': {
          color: theme.colors.violet,
          opacity: 1
        }
      }
    },
    '& > li:last-of-type > a': {
      marginRight: '0'
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: `${theme.spacing.xl}px`,

    '&:hover': {
      color: 'black',

      '& > svg': {
        color: theme.colors.violet,
        opacity: 1
      }
    },

    '& > svg': {
      display: 'inline-block',
      marginRight: `4px`,
      color: 'inherit',
      maxWidth: '1rem',
      opacity: 0.6
    }
  }
}))

export function DesktopNavList({ links, hiddenStyles }: DesktopNavListProps) {
  const { classes } = useDesktopNavStyles()
  const { pathname } = useRouter()
  return (
    <MediaQuery largerThan={0} smallerThan={'md'} styles={hiddenStyles}>
      <ul className={classes.ul}>
        {links.map((link: PageLink) => {
          return (
            <li key={link.href} className={pathname === link.href ? 'active' : undefined}>
              <Link href={link.href} passHref>
                <Text component='a' className={classes.item}>
                  {link.icon}
                  <span>
                    {link.name}
                  </span>
                </Text>
              </Link>
            </li>
          )
        })}
      </ul>
    </MediaQuery>
  );
}
