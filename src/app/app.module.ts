import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { FormsButtonComponent } from "./forms-button/forms-button.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    LoginComponent,
    FormsButtonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
