'use client';
import { Sheet, SheetContent } from '@/components/ui/sheet';

import { Sword } from 'lucide-react';

import { DamageForm } from './form/DamageForm';
import { TypeDamage } from '../../types/TypeDamage';
import { SideBarResis } from './SideBarResis';

import { SideBarHeader } from './SideBarHeader';
import { SideBarToggle } from './SideBarToggle';

export function SideBar({ status }: { status: TypeDamage }) {
  return (
    <Sheet>
      <SideBarToggle>
        <Sword />
      </SideBarToggle>

      <SheetContent className="flex flex-col text-center">
        <SideBarHeader />

        <DamageForm status={status} />

        <SideBarResis status={status} />
      </SheetContent>
    </Sheet>
  );
}
