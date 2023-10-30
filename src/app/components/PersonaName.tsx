import { ThemeToogle } from './ThemeToogle';

export function PersonaName({ name }: { name: string }) {
  return (
    <div className="flex justify-center">
      <header className="flex justify-around p-2 gap-4">
        <h1 className="text-2xl flex">{name}</h1>
        <ThemeToogle />
      </header>
    </div>
  );
}
