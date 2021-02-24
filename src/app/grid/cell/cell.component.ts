import { Cell } from './../../cell';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() cell: Cell;
  @Input() turn: Cell;
  @Output() clicked = new EventEmitter();

  constructor() {}

  Clicked() {
    this.cell.value = this.turn.value;
    this.clicked.emit();
  }

  ngOnInit(): void {}
}
