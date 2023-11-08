'use client';

import { TypeDamage } from '../types/TypeDamage';
import { ConsequencesCard } from './cards/ConsequencesCard';
import { LifeCard } from './cards/LifeCard';
import { PenalityCard } from './cards/PenalityCard';

export function HealthSection({ status }: { status: TypeDamage }) {
  return (
    <section className="flex justify-center flex-wrap max-w-[100%] gap-4 ">
      <LifeCard status={status} />
      <ConsequencesCard status={status} />
      <PenalityCard value={status.consequencias} />
    </section>
  );
}
