import { Component, ElementRef, ViewChild } from '@angular/core';

declare var require: any;

// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
// const htmlToPdfmake = require("html-to-pdfmake");
// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

//import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent {

  //@ViewChild('pdfTable') pdfTable!: ElementRef;

  prueba = "prueba";

  // public exportPDF() {
  //   const pdfInner= document.getElementById("pdfTable");
  //   if(pdfInner){

  //   var html = htmlToPdfmake(pdfInner.innerHTML);
  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).download();
  //   console.log(html);
  // }
  // }


}
