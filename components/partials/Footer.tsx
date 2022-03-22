import React from 'react';
import { Container, createStyles, List, MantineTheme } from '@mantine/core';
import { FileInfo, Home, MailForward } from 'tabler-icons-react';
import Link from 'next/link';


const useFooterStyles = (height: number) =>
  createStyles((theme: MantineTheme) => ({
    footer: {
      background: theme.colors.grey,
      color: `rgba(0,4,6,0.6)`,
      position: 'relative',
      padding: '30px',
      bottom: '0',
      left: '0',
      width: '100%',
      height: `${height}px`,
    },
    container: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      margin: 0,
      padding: theme.spacing.xl,
      height: '100%'
    }
  }))

export function Footer({ height }: { height: number }) {
  const { classes } = useFooterStyles(height)()
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <List>
          <List.Item icon={<Home />}>
            <Link href="/">
              Home
            </Link>
          </List.Item>
          <List.Item icon={<FileInfo />}>
            <Link href="/about">
              About
            </Link>
          </List.Item>
          <List.Item icon={<MailForward />}>
            <Link href="/contact" passHref>
              <a>Contact</a>
            </Link>
          </List.Item>
        </List>
      </Container>
      <Container sx={{ textAlign: 'center' }}>
        <small>Created By Dan Serio | 2022</small>
      </Container>
    </footer>
  );
}
