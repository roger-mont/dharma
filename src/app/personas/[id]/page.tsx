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
  if (data == undefined) {
    return <Error />;
  } else {
    return (
      <>
        <PersonaName name={data?.persona.name_persona} />
        <Status status={status} />
      </>
    );
  }
}