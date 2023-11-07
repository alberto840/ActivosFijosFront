import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import { Activo } from 'src/app/Models/activo';

@Injectable({
  providedIn: 'root'
})
export class PdfReporteService {
  generatePdf(grupoList: any[],fechaList: any[],activoList: Activo[], marcaList: any[], custodioList: any[], categoriaList: any[], paisList: any[], departmanetoList: any[], municipioList: any[], sucursalList: any[], bloqueList: any[], aulaList: any[], mesFaltante: any[], mesTranscurrido: any[]) {
    const doc = new jsPDF('l', 'mm', [297, 210]);
    doc.text('Informe de Activos', 10, 10);
    var fecha = new Date().toLocaleString();
    //doc.text('/n Fecha de generacion: '+fecha, 10, 10);

    const columns = ['Grupo','ID', 'Fecha','Nombre','Categoria' , 'Estado', 'Custodio', 'Ubicacion', 'Marca', 'Valor inicial','Valor actual','Meses transcurridos','Meses faltantes'];
    const data = activoList.map((activo, index) => [
      grupoList[index],
      activo.id_activo,
      fechaList[index],
      activo.activo_nombre,
      categoriaList[index],
      activo.activo_estado,
      custodioList[index],
      paisList[index]+", "+departmanetoList[index]+", "+municipioList[index]+", "+sucursalList[index]+", "+bloqueList[index]+", "+aulaList[index],
      marcaList[index],
      activo.activo_valor_inicial,      
      activo.activo_valor_actual,
      mesTranscurrido[index],
      mesFaltante[index],
      
    ]);

    autoTable(doc, {
      head: [columns],
      body: data,
    })

    doc.save('informe-activos.pdf');
  }
}
