import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:"old",loadChildren:()=>import("./login/login-module.module").then(m=>m.LoginModuleModule)
  },
  {
    path:"new",loadChildren:()=>import("./signup/signmodule.module").then(m=>m.SignmoduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModuleMain { 
}