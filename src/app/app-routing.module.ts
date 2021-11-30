import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TabsComponent } from './tabs/tabs.component';


const routes: Routes = [
  {path:'', component: TabsComponent},
  {path:'product/:idProduct', component: DetailsComponent},
  {path:'bestSeller/:idProduct', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
