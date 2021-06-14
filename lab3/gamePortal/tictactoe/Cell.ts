export class Cell {

  cellValue: number ;
  htmlElement: HTMLElement;
  
  constructor(cell: HTMLElement) {
    this.htmlElement = cell;
  }
 
  setCellValue(value: number) {
    this.cellValue = value;
    if (this.cellValue === -1) {
      this.htmlElement.innerText = "O";
    }
    if (this.cellValue === 1) {
      this.htmlElement.innerText = "X";
    }
    if (this.cellValue === 0) {
      this.htmlElement.innerText = "";
    }
  }
  fillCell(value: number){
    this.htmlElement.style.backgroundColor = value === 1 ? '#BBBAFF' : '#F0B2D3';
  }
 }