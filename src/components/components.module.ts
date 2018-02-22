import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlidesComponent } from './slides/slides';
import { IonicPageModule } from "ionic-angular";
@NgModule({
	declarations: [SlidesComponent],
	imports: [IonicPageModule.forChild(SlidesComponent)],
	exports: [SlidesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentsModule {}