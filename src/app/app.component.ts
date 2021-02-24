import { Cell } from './cell';
import { Player } from './player';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ticTacToe';
  Player1: Player = new Player('Kobi', 0);
  Player2: Player = new Player('Moriel', 0);
  isReset = true;
  turn: Cell;
  grid: Array<Cell> = [];
  gameOver = false;
  wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  constructor() {
    this.Init();
    this.turn = new Cell('X');
  }

  Init() {
    this.gameOver = false;
    for (let i = 0; i < 9; i++) {
      let temp = new Cell('');
      this.grid[i] = temp;
    }
  }

  Reset() {
    this.Init();
  }

  ClickedCell() {
    // if (this.turn.value === 'X') {
    //   this.turn.value = 'O';
    // } else {
    //   this.turn.value = 'X';
    // }
    this.turn.value = this.turn.value === 'X' ? 'O' : 'X';
    switch (this.CheckIfWinner()) {
      case 'X':
        this.Player1.score++;
        this.WinnerAnimation('X');
        this.gameOver = true;
        // alert(`${this.Player1.name} Won!`);
        break;
      case 'O':
        this.Player2.score++;
        this.WinnerAnimation('O');
        this.gameOver = true;

        // alert(`${this.Player2.name} Won!`);
        break;
    }
  }

  WinnerAnimation(winner) {
    let i = 0;
    const interval = setInterval(() => {
      this.grid[i].value = winner;
      i++;
      if (i == this.grid.length) {
        clearInterval(interval);
        setTimeout(() => {
          this.Init();
          alert(`${winner == 'X' ? this.Player1.name : this.Player2.name} Won`);
        }, 200);
      }
    }, 100);
  }

  CheckIfWinner() {
    for (let i = 0; i < this.wins.length; i++) {
      const [a, b, c] = this.wins[i];
      if (
        this.grid[a].value === this.grid[b].value &&
        this.grid[a].value === this.grid[c].value
      ) {
        return this.grid[a].value;
      }
    }
    return false;
  }
}
