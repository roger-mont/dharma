import { ThemeToogle } from './ThemeToogle';

export function NameSection({ name }: { name: string }) {
  return (
    <>
      <h1 className="text-2xl flex">{name}</h1>
      <ThemeToogle />
    </>
  );
}
