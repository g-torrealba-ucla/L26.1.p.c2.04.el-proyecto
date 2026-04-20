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
import { I_vCurso } from "../interfaces/I_vCurso.js";
import Cl_cLider from "./Cl_cLider.js";

export default class Cl_cCurso {
  private mCurso: Cl_mCurso = new Cl_mCurso();
  private vCurso: I_vCurso;
  private cLider: Cl_cLider;

  // Recibe la vista de la bodega y el controlador del Lider ya armado
  constructor(vistaCurso: I_vCurso, controladorLider: Cl_cLider) {
    this.vCurso = vistaCurso;
    this.cLider = controladorLider;

    this.vCurso.onNuevoLider(() => this.procesarLider());
  }

  private procesarLider() {
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
