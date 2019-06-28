import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { CodeComponent } from "./code/code.component";

const routes: Routes = [
  { path: "code", component: CodeComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: WelcomeComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
