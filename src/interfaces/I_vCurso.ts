// src/interfaces/I_vCurso.ts
export interface I_vCurso {
  // En lugar de exponer el botón HTML, exponemos una acción
  onNuevoLider(callback: () => void): void;
  reportar({
    cntComensales,
    porcEventos,
    masComensalesEventos,
  }: {
    cntComensales: number;
    porcEventos: number;
    masComensalesEventos: string;
  }): void;
}
