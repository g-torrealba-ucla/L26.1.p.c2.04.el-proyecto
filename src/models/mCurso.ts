import mLider from "./mLider.js";

export default class mCurso {
  private cntComensales: number = 0;
  private cntEventos: number = 0;
  private cntLideres: number = 0;

  procesarLider(e: mLider): void {
    this.cntLideres++;
    if ([e.ejercicio1, e.ejercicio2, e.ejercicio3].includes("COMENSAL"))
      this.cntComensales++;
    if ([e.ejercicio1, e.ejercicio2, e.ejercicio3].includes("EVENTO"))
      this.cntEventos++;
  }

  cantidadComensales(): number {
    return this.cntComensales;
  }

  porcentajeEventos(): number {
    if (this.cntLideres === 0) return 0;
    return (this.cntEventos / this.cntLideres) * 100;
  }

  masComensalesEventos(): "COMENSALES" | "EVENTOS" | "POR IGUAL" {
    if (this.cntComensales > this.cntEventos) return "COMENSALES";
    if (this.cntComensales < this.cntEventos) return "EVENTOS";
    return "POR IGUAL";
  }
}
