import { Cell } from './../cell';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() grid: Array<Cell>;
  @Input() turn: Cell;
  @Output() clickedCell = new EventEmitter();

  constructor() {}

  ClickedCell() {
    this.clickedCell.emit();
  }

  ngOnInit(): void {}
}
