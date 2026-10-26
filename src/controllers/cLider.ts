import { iLider } from "../interfaces/iLider.js";
import mLider from "../models/mLider.js";

export default class cLider {
  private vista: iLider;
  private callback!: (lider: mLider | null) => void;

  constructor(vista: iLider) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarLider(callback: (lider: mLider | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick(): void {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick(): void {
    this.callback(
      new mLider({
        nombre: this.vista.nombre,
        cedula: this.vista.cedula,
        equipo: this.vista.equipo,
        ejercicio1: this.vista.ejercicio1,
        ejercicio2: this.vista.ejercicio2,
        ejercicio3: this.vista.ejercicio3,
      }),
    );
    this.vista.ocultar();
  }
}
