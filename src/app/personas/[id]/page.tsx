import { HealthSection } from '@/app/components/HealthSection';
import { getSheet, getTechiniques } from '@utils/helpers';
import { NameSection } from '@/app/components/NameSection';
import { StatusSection } from '@/app/components/StatusSection';
import Header from '@/app/components/Header';
import { DataTable } from '@/app/components/techniqueTable/dataTable';
import { columns } from '@/app/components/techniqueTable/colums';

export default async function Home({
  params: { id },
}: {
  params: { id: number };
}) {
  const { status, lifeBar, persona } = await getSheet(id);
  const techniques = await getTechiniques();

  return (
    <main>
      <Header>
        <NameSection name={persona} />
      </Header>

      <HealthSection status={lifeBar} />
      <StatusSection status={status} />
      <DataTable columns={columns} data={techniques} />
    </main>
  );
}
