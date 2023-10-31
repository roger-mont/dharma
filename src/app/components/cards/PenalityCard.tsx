import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface valueToText {
  [key: number]: string;
}
export function PenalityCard({ value }: { value: number }) {
  const text: valueToText = {
    0: 'Sem Consequências',
    1: 'Sem Deslocamento de Disparada',
    2: 'Metade do Deslocamento',
    3: '-5 pontos em Defesa',
    4: 'Penalidade em todos os testes e inimigos recebem Bonus',
    5: 'Não pode usar Acoes principais',
    6: 'Morrendo',
  };

  const penality: valueToText = {
    0: 'Sem Consequências',
    1: 'Abalado',
    2: 'Prejudicado',
    3: 'Debilitado',
    4: 'Agonizante',
    5: 'Inválido',
    6: 'Morrendo',
  };

  return (
    <Card className="max-w-[50%] min-w-[15%] text-center">
      <CardHeader>
        <CardTitle>Penalidade</CardTitle>
        <CardContent>{penality[value]}</CardContent>
      </CardHeader>
      <CardContent className="break-all">{text[value]}</CardContent>
    </Card>
  );
}
