import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

export function SideBarHeader() {
  return (
    <SheetHeader>
      <SheetTitle>Editar Vida</SheetTitle>
      <SheetDescription>Escreva seu dano total</SheetDescription>
    </SheetHeader>
  );
}
