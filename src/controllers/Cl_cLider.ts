import { I_vLider } from "../interfaces/I_vLider.js";
import Cl_mLider from "../models/Cl_mLider.js";

export default class Cl_cLider {
  private vista: I_vLider;
  private callback!: (lider: Cl_mLider | null) => void;
  constructor(vista: I_vLider) {
    this.vista = vista;
    // El controlador se suscribe a los eventos de la interfaz
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }
  // Método para que la Curso llame a este controlador
  cargarLider(callback: (lider: Cl_mLider | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }
  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  private btAceptarOnClick() {
    this.callback(
      new Cl_mLider({
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
