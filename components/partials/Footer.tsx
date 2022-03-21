import React from 'react';
import { Container, createStyles, MantineTheme } from '@mantine/core';

const useFooterStyles = (height: number) =>
  createStyles((theme: MantineTheme) => ({
    footer: {
      background: theme.colors.grey,
      color: `rgba(0,4,6,0.6)`,
      position: 'fixed',
      padding: '30px',
      zIndex: -900,
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
        <small>Dan serio</small>
      </Container>
    </footer>
  );
}
