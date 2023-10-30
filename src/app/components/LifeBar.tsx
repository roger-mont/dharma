'use client';

import { TypeDamage } from '../types/TypeDamage';
import { ConsequencesCard } from './cards/ConsequencesCard';
import { LifeCard } from './cards/LifeCard';

export function LifeBar({ status }: TypeDamage) {
  return (
    <aside className="flex justify-center flex-wrap">
      <LifeCard status={status} />
      <ConsequencesCard status={status} />
    </aside>
  );
}
