export interface iCurso {
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
