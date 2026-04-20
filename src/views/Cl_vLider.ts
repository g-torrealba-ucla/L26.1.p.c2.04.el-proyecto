import { I_vLider } from "../interfaces/I_vLider.js";
import { tEjercicio } from "../models/Cl_mLider.js";

export default class Cl_vLider implements I_vLider {
  inNombre: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  inCedula: HTMLInputElement;
  inEquipo: HTMLInputElement;
  inEjercicio1: HTMLInputElement;
  inEjercicio2: HTMLInputElement;
  inEjercicio3: HTMLInputElement;
  constructor() {
    this.vista = document.getElementById("lider") as HTMLElement;
    this.inNombre = document.getElementById(
      "lider_inNombre",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "lider_inCedula",
    ) as HTMLInputElement;
    this.inEquipo = document.getElementById(
      "lider_inEquipo",
    ) as HTMLInputElement;
    this.inEjercicio1 = document.getElementById(
      "lider_inEjercicio1",
    ) as HTMLInputElement;
    this.inEjercicio2 = document.getElementById(
      "lider_inEjercicio2",
    ) as HTMLInputElement;
    this.inEjercicio3 = document.getElementById(
      "lider_inEjercicio3",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "lider_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "lider_btAceptar",
    ) as HTMLButtonElement;
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return this.inCedula ? +this.inCedula.value : 0;
  }
  get equipo(): string {
    return this.inEquipo.value.trim();
  }
  get ejercicio1(): tEjercicio {
    return this.inEjercicio1.value.trim() as tEjercicio;
  }
  get ejercicio2(): tEjercicio {
    return this.inEjercicio2.value.trim() as tEjercicio;
  }
  get ejercicio3(): tEjercicio {
    return this.inEjercicio3.value.trim() as tEjercicio;
  }
  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
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
