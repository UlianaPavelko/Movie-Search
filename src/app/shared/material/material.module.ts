import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDividerModule
  ],
  exports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
