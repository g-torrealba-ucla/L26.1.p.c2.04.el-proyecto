export default class vCurso {
    btNuevoLider;
    lblCntComensales;
    lblPorcEventos;
    lblMasComensalesEventos;
    vista;
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
        this.lblCntComensales.innerHTML = `${cntComensales}`;
        this.lblPorcEventos.innerHTML = `${porcEventos}%`;
        this.lblMasComensalesEventos.innerHTML = masComensalesEventos;
    }
    mostrar() {
        if (this.vista)
            this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista)
            this.vista.hidden = true;
    }
}
//# sourceMappingURL=vCurso.js.map