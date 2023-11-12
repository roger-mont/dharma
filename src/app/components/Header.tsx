import Image from 'next/image';

type HeaderProps = {
  children: React.ReactNode;
  imageSrc: string;
};

export default function Header({ children, imageSrc }: HeaderProps) {
  return (
    <header className="flex  justify-center p-2 gap-4">
      <Image
        className="rounded-full max-h-14"
        src={imageSrc}
        alt="Icone do personagem"
        width="56"
        height="56"
      />
      {children}
    </header>
  );
}
