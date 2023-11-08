import { Button } from '@/components/ui/button';

import { SheetTrigger } from '@/components/ui/sheet';

import { ReactNode } from 'react';

export function SideBarToggle({ children }: { children: ReactNode }) {
  return (
    <SheetTrigger asChild>
      <Button>{children}</Button>
    </SheetTrigger>
  );
}
