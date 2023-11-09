import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Activo } from 'src/app/Models/activo';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class XlsReporteService {
  data!: any[];

  generarInforme(grupoList: any[],fechaList: any[],activoList: Activo[], marcaList: any[], custodioList: any[], categoriaList: any[], paisList: any[], departmanetoList: any[], municipioList: any[], sucursalList: any[], bloqueList: any[], aulaList: any[], mesFaltante: any[], mesTranscurrido: any[], auxValorActual: any[], auxValorInicial: any[], mesTotal: any[]) {
    const informe = [['Informe generado: '+new Date().toLocaleString()]];
    const headers = ['Grupo', 'ID', 'Fecha', 'Nombre', 'Categoria', 'Estado', 'Custodio', 'Ubicacion', 'Marca', 'Valor inicial', 'Valor actual', 'Meses transcurridos', 'Meses faltantes', 'Tiempo de vida total'];
    informe.push(headers);
    this.data = activoList;

    this.data.forEach(activo => {
      const fila = [
        grupoList[activoList.indexOf(activo)], activo.id_activo, fechaList[activoList.indexOf(activo)], activo.activo_nombre, categoriaList[activoList.indexOf(activo)], activo.activo_estado,
        custodioList[activoList.indexOf(activo)], paisList[activoList.indexOf(activo)], marcaList[activoList.indexOf(activo)], auxValorInicial[activoList.indexOf(activo)],
        auxValorActual[activoList.indexOf(activo)], mesTranscurrido[activoList.indexOf(activo)], mesFaltante[activoList.indexOf(activo)], mesTotal[activoList.indexOf(activo)]
      ];
      informe.push(fila);
    });

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(informe);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Informe_Activos');

    XLSX.writeFile(wb, 'Informe_Activos.xlsx');
  }
}
