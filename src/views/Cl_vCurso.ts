import { I_vCurso } from "../interfaces/I_vCurso";

export default class Cl_vCurso implements I_vCurso {
  btNuevoLider: HTMLButtonElement;
  vista: HTMLElement | null;
  lblCntComensales: HTMLElement;
  lblPorcEventos: HTMLElement;
  lblMasComensalesEventos: HTMLInputElement;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoLider = document.getElementById(
      "body_btNuevoLider",
    ) as HTMLButtonElement;
    this.lblCntComensales = document.getElementById(
      "body_lblCntComensales",
    ) as HTMLInputElement;
    this.lblPorcEventos = document.getElementById(
      "body_lblPorcEventos",
    ) as HTMLInputElement;
    this.lblMasComensalesEventos = document.getElementById(
      "body_lblMasComensalesEventos",
    ) as HTMLInputElement;
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
    this.lblCntComensales.innerHTML = cntComensales.toString();
    this.lblPorcEventos.innerHTML = porcEventos.toString();
    this.lblMasComensalesEventos.innerHTML = masComensalesEventos;
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
