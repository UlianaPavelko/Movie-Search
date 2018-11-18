import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDividerModule
  ],
  exports: [
    MatFormFieldModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
