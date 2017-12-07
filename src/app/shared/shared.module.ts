import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule, MatCardModule, MatInputModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: []
})
export class SharedModule { }
