import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  public pageTitle = "Please log in";

  public constructor(private titleService: Title) {
    this.titleService.setTitle(`${this.pageTitle} — Claim tax benefits`);
  }
}
