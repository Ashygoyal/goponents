import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoOffCanvasComponent } from './go-off-canvas.component';
import { GoOffCanvasDirective } from './go-off-canvas.directive';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoOffCanvasHeaderComponent } from './go-off-canvas-header/go-off-canvas-header.component';

@NgModule({
  declarations: [
    GoOffCanvasComponent,
    GoOffCanvasDirective,
    GoOffCanvasHeaderComponent
  ],
  imports: [
    CommonModule,
    GoIconButtonModule
  ],
  exports: [
    GoOffCanvasComponent, GoOffCanvasHeaderComponent
  ]
})
export class GoOffCanvasModule {}
