import { iLider } from "../interfaces/iLider.js";
import { tEjercicio } from "../models/mLider.js";

export default class vLider implements iLider {
  private inNombre: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inEquipo: HTMLInputElement;
  private inEjercicio1: HTMLSelectElement;
  private inEjercicio2: HTMLSelectElement;
  private inEjercicio3: HTMLSelectElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("lider");
    this.inNombre = document.getElementById("lider_inNombre") as HTMLInputElement;
    this.inCedula = document.getElementById("lider_inCedula") as HTMLInputElement;
    this.inEquipo = document.getElementById("lider_inEquipo") as HTMLInputElement;
    this.inEjercicio1 = document.getElementById("lider_inEjercicio1") as HTMLSelectElement;
    this.inEjercicio2 = document.getElementById("lider_inEjercicio2") as HTMLSelectElement;
    this.inEjercicio3 = document.getElementById("lider_inEjercicio3") as HTMLSelectElement;
    this.btCancelar = document.getElementById("lider_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("lider_btAceptar") as HTMLButtonElement;
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return +this.inCedula.value;
  }
  get equipo(): string {
    return this.inEquipo.value.trim();
  }
  get ejercicio1(): tEjercicio {
    return this.inEjercicio1.value as tEjercicio;
  }
  get ejercicio2(): tEjercicio {
    return this.inEjercicio2.value as tEjercicio;
  }
  get ejercicio3(): tEjercicio {
    return this.inEjercicio3.value as tEjercicio;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    if (this.vista) {
      this.inNombre.value = "";
      this.inCedula.value = "";
      this.inEquipo.value = "";
      this.inEjercicio1.selectedIndex = 0;
      this.inEjercicio2.selectedIndex = 0;
      this.inEjercicio3.selectedIndex = 0;
      this.vista.hidden = false;
    }
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}
