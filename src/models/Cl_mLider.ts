import Cl_mPersona from "./Cl_mPersona.js";
export type tEjercicio =
  | "CONCURSO"
  | "EVENTO"
  | "COMENSAL"
  | "ACADEMIA"
  | "MEDICO";

export default class Cl_mEmpleado extends Cl_mPersona {
  private _equipo: string = "";
  private _ejercicio1: tEjercicio = "CONCURSO";
  private _ejercicio2: tEjercicio = "CONCURSO";
  private _ejercicio3: tEjercicio = "CONCURSO";

  constructor({
    nombre,
    cedula,
    equipo,
    ejercicio1,
    ejercicio2,
    ejercicio3,
  }: {
    nombre: string;
    cedula: number;
    equipo: string;
    ejercicio1: tEjercicio;
    ejercicio2: tEjercicio;
    ejercicio3: tEjercicio;
  }) {
    super({ nombre, cedula });
    this.equipo = equipo;
    this.ejercicio1 = ejercicio1;
    this.ejercicio2 = ejercicio2;
    this.ejercicio3 = ejercicio3;
  }
  set equipo(value: string) {
    this._equipo = value;
  }
  get equipo(): string {
    return this._equipo;
  }
  set ejercicio1(value: tEjercicio) {
    this._ejercicio1 = value;
  }
  get ejercicio1(): string {
    return this._ejercicio1;
  }
  set ejercicio2(value: tEjercicio) {
    this._ejercicio2 = value;
  }
  get ejercicio2(): string {
    return this._ejercicio2;
  }
  set ejercicio3(value: tEjercicio) {
    this._ejercicio3 = value;
  }
  get ejercicio3(): string {
    return this._ejercicio3;
  }
}
