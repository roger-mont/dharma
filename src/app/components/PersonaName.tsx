import { ThemeToogle } from './ThemeToogle';

export function PersonaName({ name }: { name: string }) {
  return (
    <header className="flex justify-between m-4 ">
      <h1 className="text-2xl">{name}</h1>
      <ThemeToogle />
    </header>
  );
}
