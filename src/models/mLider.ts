export type tEjercicio =
  | "CONCURSO"
  | "EVENTO"
  | "COMENSAL"
  | "ACADEMIA"
  | "MEDICO";

export default class mLider {
  private _nombre: string = "";
  private _cedula: number = 0;
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
    this.nombre = nombre;
    this.cedula = cedula;
    this.equipo = equipo;
    this.ejercicio1 = ejercicio1;
    this.ejercicio2 = ejercicio2;
    this.ejercicio3 = ejercicio3;
  }

  set nombre(value: string) {
    this._nombre = value.trim();
  }
  get nombre(): string {
    return this._nombre;
  }

  set cedula(value: number) {
    this._cedula = +value;
  }
  get cedula(): number {
    return this._cedula;
  }

  set equipo(value: string) {
    this._equipo = value.trim();
  }
  get equipo(): string {
    return this._equipo;
  }

  set ejercicio1(value: tEjercicio) {
    this._ejercicio1 = value;
  }
  get ejercicio1(): tEjercicio {
    return this._ejercicio1;
  }

  set ejercicio2(value: tEjercicio) {
    this._ejercicio2 = value;
  }
  get ejercicio2(): tEjercicio {
    return this._ejercicio2;
  }

  set ejercicio3(value: tEjercicio) {
    this._ejercicio3 = value;
  }
  get ejercicio3(): tEjercicio {
    return this._ejercicio3;
  }
}
