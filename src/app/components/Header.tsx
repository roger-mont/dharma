type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return <header className="flex justify-center p-2 gap-4">{children}</header>;
}
