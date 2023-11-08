import { ThemeToogle } from './ThemeToogle';

export function NameSection({ name }: { name: string }) {
  return (
    <header className="flex justify-center p-2 gap-4">
      <h1 className="text-2xl flex">{name}</h1>
      <ThemeToogle />
    </header>
  );
}
