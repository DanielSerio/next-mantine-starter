import { createStyles, Group, Header, MantineTheme, MediaQuery, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { DesktopNavList } from '../navigation/DesktopNavList';
import { MobileNavList } from '../navigation/MobileNavList';
import { pageLinks } from '../navigation/pageLinks';

const useHeaderStyles = createStyles((theme: MantineTheme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `0 ${theme.spacing.xl}px`
  },
  logo: {
    color: theme.colors.violet
  }
}))

export function AppHeader() {
  const { classes } = useHeaderStyles()
  const hiddenMenuStyles = {
    height: 0,
    width: 0,
    padding: 0,
    overflow: 'hidden',
    margin: 0,
    opacity: 0
  }
  return (
    <header className="header">
      <Header className={classes.header} height={80}>
        <Title order={1} className={classes.logo}>
          <Link href="/" passHref>
            Dan Serio
          </Link>
        </Title>
        <Group direction="column" spacing={5}>
          <DesktopNavList links={pageLinks} hiddenStyles={hiddenMenuStyles} />
          <MobileNavList links={pageLinks} hiddenStyles={hiddenMenuStyles} />
        </Group>
      </Header>
    </header>
  );
}
