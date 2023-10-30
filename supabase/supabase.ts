export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      persona: {
        Row: {
          id: number;
          name_persona: string;
          name_player: number;
          table: number;
        };
        Insert: {
          id?: number;
          name_persona: string;
          name_player: number;
          table: number;
        };
        Update: {
          id?: number;
          name_persona?: string;
          name_player?: number;
          table?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'persona_name_player_fkey';
            columns: ['name_player'];
            referencedRelation: 'players';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'persona_table_fkey';
            columns: ['table'];
            referencedRelation: 'tables';
            referencedColumns: ['id'];
          },
        ];
      };
      players: {
        Row: {
          id: number;
          is_active: boolean;
          name: string;
        };
        Insert: {
          id?: number;
          is_active?: boolean;
          name: string;
        };
        Update: {
          id?: number;
          is_active?: boolean;
          name?: string;
        };
        Relationships: [];
      };
      sheet: {
        Row: {
          act_resis: number;
          act_vitalidade: number;
          consequencias: Database['public']['Enums']['consequencias'];
          corpo: number;
          espirito: number;
          id: number;
          max_resis: number;
          max_vitalidade: number;
          mente: number;
          movimento: number;
          persona: number;
        };
        Insert: {
          act_resis?: number;
          act_vitalidade?: number;
          consequencias?: Database['public']['Enums']['consequencias'];
          corpo?: number;
          espirito?: number;
          id?: number;
          max_resis?: number;
          max_vitalidade?: number;
          mente?: number;
          movimento?: number;
          persona: number;
        };
        Update: {
          act_resis?: number;
          act_vitalidade?: number;
          consequencias?: Database['public']['Enums']['consequencias'];
          corpo?: number;
          espirito?: number;
          id?: number;
          max_resis?: number;
          max_vitalidade?: number;
          mente?: number;
          movimento?: number;
          persona?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'sheet_persona_fkey';
            columns: ['persona'];
            referencedRelation: 'persona';
            referencedColumns: ['id'];
          },
        ];
      };
      sistems: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      tables: {
        Row: {
          id: number;
          is_active: boolean;
          name: string;
          number_players: number | null;
          sistem: number | null;
        };
        Insert: {
          id?: number;
          is_active?: boolean;
          name: string;
          number_players?: number | null;
          sistem?: number | null;
        };
        Update: {
          id?: number;
          is_active?: boolean;
          name?: string;
          number_players?: number | null;
          sistem?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'tables_sistem_fkey';
            columns: ['sistem'];
            referencedRelation: 'sistems';
            referencedColumns: ['id'];
          },
        ];
      };
      techniques: {
        Row: {
          Categoria: string | null;
          Custo: string | null;
          Descrição: string | null;
          id: number;
          Técnica: string | null;
        };
        Insert: {
          Categoria?: string | null;
          Custo?: string | null;
          Descrição?: string | null;
          id?: number;
          Técnica?: string | null;
        };
        Update: {
          Categoria?: string | null;
          Custo?: string | null;
          Descrição?: string | null;
          id?: number;
          Técnica?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      consequencias: '0' | '1' | '2' | '3' | '4' | '5';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
