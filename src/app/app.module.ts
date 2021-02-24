import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CellComponent } from './grid/cell/cell.component';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, CellComponent, GridComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
