import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// module for 'Angular material' components.
@NgModule({
  imports: [MatExpansionModule, MatInputModule, MatCardModule],
  exports: [MatExpansionModule, MatInputModule, MatCardModule],
})
export class MeterialModule {}
