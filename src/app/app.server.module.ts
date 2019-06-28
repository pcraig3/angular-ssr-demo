import { NgModule, Injectable, Inject } from "@angular/core";
import { ServerModule } from "@angular/platform-server";

import { Request } from "express";
import { REQUEST } from "@nguniversal/express-engine/tokens";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { CookieService } from "./cookie.service";

@Injectable()
export class RequestCookies {
  constructor(@Inject(REQUEST) private request: Request) {}

  get cookies() {
    return !!this.request.headers.cookie ? this.request.headers.cookie : null;
  }
}

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [CookieService, { provide: "req", useClass: RequestCookies }],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
