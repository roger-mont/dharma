'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Sword } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DamageForm } from './DamageForm';
import { TypeDamage } from '../types/TypeDamage';
import { Label } from '@radix-ui/react-label';

export function DamageSideBar({ status }: TypeDamage) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Sword />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col text-center">
        <SheetHeader>
          <SheetTitle>Editar Vida</SheetTitle>
          <SheetDescription>Escreva seu dano total</SheetDescription>
        </SheetHeader>
        <DamageForm status={status} />
        <Label className="border-2 rounded-xl">
          Resistencia Maxima: {status.max_resis}
        </Label>
        <Label className="border-2 rounded-xl">
          Resistencia Atual: {status.act_resis}
        </Label>
      </SheetContent>
    </Sheet>
  );
}
