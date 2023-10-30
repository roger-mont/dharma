import { LifeBar } from '@/app/components/LifeBar';
import { getSheet } from '../../../../utils/helpers';
import { PersonaName } from '../../components/PersonaName';
import { Status } from '../../components/Status';
import Error from './error';

export default async function Home({
  params: { id },
}: {
  params: { id: number };
}) {
  const data = await getSheet(id);

  const status = {
    corpo: Number(data?.corpo),
    movimento: Number(data?.movimento),
    mente: Number(data?.mente),
    espirito: Number(data?.espirito),
  };

  const lifeBar = {
    id: id,
    max_resis: Number(data?.max_resis),
    act_resis: Number(data?.act_resis),
    max_vitalidade: Number(data?.max_vitalidade),
    act_vitalidade: Number(data?.act_vitalidade),
    movimento: Number(data?.movimento),
    consequencias: Number(data?.consequencias),
  };
  if (data == undefined) {
    return <Error />;
  } else {
    return (
      <>
        <PersonaName name={data?.persona.name_persona} />
        <LifeBar status={lifeBar} />
        <Status status={status} />
      </>
    );
  }
}
