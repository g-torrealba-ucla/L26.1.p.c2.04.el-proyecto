export default class Cl_vLider {
    inNombre;
    btCancelar;
    btAceptar;
    vista;
    inCedula;
    inEquipo;
    inEjercicio1;
    inEjercicio2;
    inEjercicio3;
    constructor() {
        this.vista = document.getElementById("lider");
        this.inNombre = document.getElementById("lider_inNombre");
        this.inCedula = document.getElementById("lider_inCedula");
        this.inEquipo = document.getElementById("lider_inEquipo");
        this.inEjercicio1 = document.getElementById("lider_inEjercicio1");
        this.inEjercicio2 = document.getElementById("lider_inEjercicio2");
        this.inEjercicio3 = document.getElementById("lider_inEjercicio3");
        this.btCancelar = document.getElementById("lider_btCancelar");
        this.btAceptar = document.getElementById("lider_btAceptar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get cedula() {
        return this.inCedula ? +this.inCedula.value : 0;
    }
    get equipo() {
        return this.inEquipo.value.trim();
    }
    get ejercicio1() {
        return this.inEjercicio1.value.trim();
    }
    get ejercicio2() {
        return this.inEjercicio2.value.trim();
    }
    get ejercicio3() {
        return this.inEjercicio3.value.trim();
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vLider.js.map