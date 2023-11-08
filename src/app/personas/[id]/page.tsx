import { HealthSection } from '@/app/components/HealthSection';
import { getSheet } from '@utils/helpers';
import { NameSection } from '@/app/components/NameSection';
import { StatusSection } from '@/app/components/StatusSection';

export default async function Home({
  params: { id },
}: {
  params: { id: number };
}) {
  const { status, lifeBar, persona } = await getSheet(id);

  return (
    <main className="h-screen w-full">
      <NameSection name={persona} />
      <HealthSection status={lifeBar} />
      <StatusSection status={status} />
    </main>
  );
}
