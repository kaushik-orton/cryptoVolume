import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';


const routes: Routes = [
  { path: '', component: AllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// export const components=[GreenComponent,RedComponent];
export class AppRoutingModule { }
export const Routingcomponents =[AllComponent]
