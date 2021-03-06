import { Container, ContainerProps, createStyles, MantineTheme } from '@mantine/core';
import React from 'react';

export interface PageBlockProps extends ContainerProps {
  emphasis?: boolean
}



export function PageBlock({
  children,
  className,
  emphasis,
  ...props
}: PageBlockProps) {
  const usePageBlockStyles = createStyles((theme: MantineTheme) => ({
    block: {
      margin: `${theme.spacing.xl}px auto`,
      padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
      background: emphasis ? theme.colors.violet : 'transparent',
      color: emphasis ? 'white' : 'inherit',
      maxWidth: '8000px',
      position: 'relative'
    }
  }))
  const { classes } = usePageBlockStyles()
  return (
    <Container className={classes.block} {...props}>
      <Container>
        {children}
      </Container>
    </Container>
  );
}
