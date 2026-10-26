export default class mLider {
    _nombre = "";
    _cedula = 0;
    _equipo = "";
    _ejercicio1 = "CONCURSO";
    _ejercicio2 = "CONCURSO";
    _ejercicio3 = "CONCURSO";
    constructor({ nombre, cedula, equipo, ejercicio1, ejercicio2, ejercicio3, }) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.equipo = equipo;
        this.ejercicio1 = ejercicio1;
        this.ejercicio2 = ejercicio2;
        this.ejercicio3 = ejercicio3;
    }
    set nombre(value) {
        this._nombre = value.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set cedula(value) {
        this._cedula = +value;
    }
    get cedula() {
        return this._cedula;
    }
    set equipo(value) {
        this._equipo = value.trim();
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
//# sourceMappingURL=mLider.js.map