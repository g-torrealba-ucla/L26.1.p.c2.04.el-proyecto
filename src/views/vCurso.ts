import { iCurso } from "../interfaces/iCurso.js";

export default class vCurso implements iCurso {
  private btNuevoLider: HTMLButtonElement;
  private lblCntComensales: HTMLElement;
  private lblPorcEventos: HTMLElement;
  private lblMasComensalesEventos: HTMLElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoLider = document.getElementById("body_btNuevoLider") as HTMLButtonElement;
    this.lblCntComensales = document.getElementById("body_lblCntComensales") as HTMLElement;
    this.lblPorcEventos = document.getElementById("body_lblPorcEventos") as HTMLElement;
    this.lblMasComensalesEventos = document.getElementById("body_lblMasComensalesEventos") as HTMLElement;
  }

  onNuevoLider(callback: () => void): void {
    this.btNuevoLider.onclick = callback;
  }

  reportar({
    cntComensales,
    porcEventos,
    masComensalesEventos,
  }: {
    cntComensales: number;
    porcEventos: number;
    masComensalesEventos: string;
  }): void {
    this.lblCntComensales.innerHTML = `${cntComensales}`;
    this.lblPorcEventos.innerHTML = `${porcEventos}%`;
    this.lblMasComensalesEventos.innerHTML = masComensalesEventos;
  }

  mostrar(): void {
    if (this.vista) this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}
