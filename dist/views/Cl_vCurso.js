export default class Cl_vCurso {
    btNuevoLider;
    vista;
    lblCntComensales;
    lblPorcEventos;
    lblMasComensalesEventos;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoLider = document.getElementById("body_btNuevoLider");
        this.lblCntComensales = document.getElementById("body_lblCntComensales");
        this.lblPorcEventos = document.getElementById("body_lblPorcEventos");
        this.lblMasComensalesEventos = document.getElementById("body_lblMasComensalesEventos");
    }
    onNuevoLider(callback) {
        this.btNuevoLider.onclick = callback;
    }
    reportar({ cntComensales, porcEventos, masComensalesEventos, }) {
        this.lblCntComensales.innerHTML = cntComensales.toString();
        this.lblPorcEventos.innerHTML = porcEventos.toString();
        this.lblMasComensalesEventos.innerHTML = masComensalesEventos;
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
//# sourceMappingURL=Cl_vCurso.js.map