import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { CookieService } from "../cookie.service";

@Component({
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.css"]
})
export class CodeComponent {
  public pageTitle = "Your access code";
  public accessCode: string;

  public constructor(
    private titleService: Title,
    private cookieService: CookieService
  ) {
    this.titleService.setTitle(`${this.pageTitle} — Claim tax benefits`);
    this.accessCode = this.cookieService.get("accessCode") || "123";
  }
}
