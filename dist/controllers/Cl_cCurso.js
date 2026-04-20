/**
 * LOS PROYECTOS
 * Sean N líderes de un curso de programación.
 * Cada líder representa un equipo, y se conoce su nombre, cédula
 * y el nombre de 3 ejercicios asignados.
 * Los ejercicios pueden ser:
 * CONCURSO, EVENTO, COMENSAL, ACADEMIA o MEDICO.
 *
 * Se desea conocer:
 * - A Cuántos equipos se les asigna el ejercicio COMENSAL
 * - Cual es el porcentaje de asignación del ejercicio EVENTO
 * - Si se asignó más el ejercicio COMENSAL o el ejercicio EVENTO
 *
 * Considere que la clase líder hereda de una clase persona
 */
import Cl_mCurso from "../models/Cl_mCurso.js";
export default class Cl_cCurso {
    mCurso = new Cl_mCurso();
    vCurso;
    cLider;
    // Recibe la vista de la bodega y el controlador del Lider ya armado
    constructor(vistaCurso, controladorLider) {
        this.vCurso = vistaCurso;
        this.cLider = controladorLider;
        this.vCurso.onNuevoLider(() => this.procesarLider());
    }
    procesarLider() {
        this.cLider.cargarLider((lider) => {
            if (lider !== null) {
                this.mCurso.procesarLider(lider);
                this.vCurso.reportar({
                    cntComensales: this.mCurso.cantidadComensales(),
                    porcEventos: this.mCurso.porcentajeEventos(),
                    masComensalesEventos: this.mCurso.masComensales(),
                });
            }
        });
    }
}
//# sourceMappingURL=Cl_cCurso.js.map