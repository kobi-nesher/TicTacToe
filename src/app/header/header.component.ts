import { Player } from './../player';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() Player1: Player;
  @Input() Player2: Player;
  @Output() reset = new EventEmitter();
  constructor() {}

  Reset() {
    this.reset.emit();
  }

  ngOnInit(): void {}
}
