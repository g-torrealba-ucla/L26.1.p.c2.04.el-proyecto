import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mEmpleado extends Cl_mPersona {
    _equipo = "";
    _ejercicio1 = "CONCURSO";
    _ejercicio2 = "CONCURSO";
    _ejercicio3 = "CONCURSO";
    constructor({ nombre, cedula, equipo, ejercicio1, ejercicio2, ejercicio3, }) {
        super({ nombre, cedula });
        this.equipo = equipo;
        this.ejercicio1 = ejercicio1;
        this.ejercicio2 = ejercicio2;
        this.ejercicio3 = ejercicio3;
    }
    set equipo(value) {
        this._equipo = value;
    }
    get equipo() {
        return this._equipo;
    }
    set ejercicio1(value) {
        this._ejercicio1 = value;
    }
    get ejercicio1() {
        return this._ejercicio1;
    }
    set ejercicio2(value) {
        this._ejercicio2 = value;
    }
    get ejercicio2() {
        return this._ejercicio2;
    }
    set ejercicio3(value) {
        this._ejercicio3 = value;
    }
    get ejercicio3() {
        return this._ejercicio3;
    }
}
//# sourceMappingURL=Cl_mLider.js.map