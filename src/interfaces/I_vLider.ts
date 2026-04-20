import { type tEjercicio } from "../models/Cl_mLider";
export interface I_vLider {
  get nombre(): string;
  get cedula(): number;
  get equipo(): string;
  get ejercicio1(): tEjercicio;
  get ejercicio2(): tEjercicio;
  get ejercicio3(): tEjercicio;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
