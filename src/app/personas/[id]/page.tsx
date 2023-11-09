import { HealthSection } from '@/app/components/HealthSection';
import { getSheet, getTechiniques } from '@utils/helpers';
import { NameSection } from '@/app/components/NameSection';
import { StatusSection } from '@/app/components/StatusSection';
import { Tables } from '@/app/types/TypeTechiniques';
import { columns } from '@/app/components/techniqueTable/colums';
import { DataTable } from '@/app/components/techniqueTable/dataTable';

export default async function Home({
  params: { id },
}: {
  params: { id: number };
}) {
  const { status, lifeBar, persona } = await getSheet(id);
  const techniques: Tables<'techniques'>[] = await getTechiniques();

  return (
    <main>
      <NameSection name={persona} />
      <HealthSection status={lifeBar} />
      <StatusSection status={status} />
      <DataTable columns={columns} data={techniques} />
    </main>
  );
}
