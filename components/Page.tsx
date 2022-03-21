import { AppShell, AppShellProps, ScrollArea } from '@mantine/core';
import React from 'react';

export interface PageProps extends AppShellProps {

}

export function Page({ children, ...props }: PageProps) {
  return (
    <ScrollArea style={{ height: '100vh' }}>
      <AppShell sx={{
        padding: 0,
        position: 'relative',
        zIndex: 10,
        background: 'hsl(85, 8%, 96%) !important'
      }} {...props}>
        {children}
      </AppShell>
    </ScrollArea>
  );
}
