import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {
  MatButtonModule, MatCardModule, MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule,
  MatSlideToggleModule, MatGridListModule, MatDialogModule, MatAutocompleteModule, MatMenuModule, MatCheckboxModule,
  MatTooltipModule, MatDatepickerModule, MatRadioModule, MatNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  declarations: []
})
export class SharedModule { }
