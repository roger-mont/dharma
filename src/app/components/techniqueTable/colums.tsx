'use client';
import { ColumnDef } from '@tanstack/react-table';

import { Tables } from '@/app/types/TypeTechiniques';

import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const columns: ColumnDef<Tables<'techniques'>>[] = [
  {
    accessorKey: 'Categoria',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Categoria
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Técnica',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Técnica
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Custo',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Custo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Descrição',
    header: 'Descrição',
  },
];
