import mLider from "../models/mLider.js";
export default class cLider {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarLider(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new mLider({
            nombre: this.vista.nombre,
            cedula: this.vista.cedula,
            equipo: this.vista.equipo,
            ejercicio1: this.vista.ejercicio1,
            ejercicio2: this.vista.ejercicio2,
            ejercicio3: this.vista.ejercicio3,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cLider.js.map