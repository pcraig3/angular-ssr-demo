import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { CookieService } from "../cookie.service";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  public pageTitle = "Please log in";
  public accessCode: string;

  public constructor(
    private titleService: Title,
    private cookieService: CookieService
  ) {
    this.titleService.setTitle(`${this.pageTitle} — Claim tax benefits`);
    this.accessCode = this.cookieService.get("accessCode") || "";
  }
}
