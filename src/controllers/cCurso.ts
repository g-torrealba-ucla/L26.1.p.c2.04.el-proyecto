/**
 * LOS PROYECTOS
 * Sean N líderes de un curso de programación.
 * Cada líder representa un equipo, y se conoce su nombre, cédula
 * y el nombre de 3 ejercicios asignados.
 * Los ejercicios pueden ser: CONCURSO, EVENTO, COMENSAL, ACADEMIA o MEDICO.
 *
 * Se desea conocer:
 * - A Cuántos equipos se les asigna el ejercicio COMENSAL
 * - Cuál es el porcentaje de asignación del ejercicio EVENTO
 * - Si se asignó más el ejercicio COMENSAL o el ejercicio EVENTO
 */

import mCurso from "../models/mCurso.js";
import { iCurso } from "../interfaces/iCurso.js";
import cLider from "./cLider.js";

export default class cCurso {
  private mCurso: mCurso = new mCurso();
  private vCurso: iCurso;
  private cLider: cLider;

  constructor(vistaCurso: iCurso, controladorLider: cLider) {
    this.vCurso = vistaCurso;
    this.cLider = controladorLider;

    this.vCurso.onNuevoLider(() => this.procesarLider());
  }

  private procesarLider(): void {
    this.cLider.solicitarLider((lider) => {
      if (lider !== null) {
        this.mCurso.procesarLider(lider);
        this.vCurso.reportar({
          cntComensales: this.mCurso.cantidadComensales(),
          porcEventos: this.mCurso.porcentajeEventos(),
          masComensalesEventos: this.mCurso.masComensalesEventos(),
        });
      }
    });
  }
}
