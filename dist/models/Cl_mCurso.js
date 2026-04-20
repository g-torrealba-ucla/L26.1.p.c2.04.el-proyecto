export default class Cl_mEmpresa {
    cntComensales = 0;
    cntEventos = 0;
    cntLideres = 0;
    procesarLider(e) {
        this.cntLideres++;
        if ([e.ejercicio1, e.ejercicio2, e.ejercicio3].includes("COMENSAL"))
            this.cntComensales++;
        if ([e.ejercicio1, e.ejercicio2, e.ejercicio3].includes("EVENTO"))
            this.cntEventos++;
    }
    cantidadComensales() {
        return this.cntComensales;
    }
    porcentajeEventos() {
        if (this.cntLideres === 0)
            return 0;
        return (this.cntEventos / this.cntLideres) * 100;
    }
    masComensales() {
        if (this.cntComensales > this.cntEventos)
            return "COMENSALES";
        if (this.cntComensales < this.cntEventos)
            return "EVENTOS";
        return "POR IGUAL";
    }
}
//# sourceMappingURL=Cl_mCurso.js.map