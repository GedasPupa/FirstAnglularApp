import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  template: `
    <!-- header.component.html -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            [src]="headerLogoUrl"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          My Awesome App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerFilname = 'bootstrap-logo.svg';
  headerLogoUrl = 'https://getbootstrap.com/docs/5.1/assets/brand/' + this.headerFilname;
  // 'https://getbootstrap.com/docs/5.1/assets/brand/' + 'bootstrap-logo.svg'

  constructor() { }

  ngOnInit(): void {
  }
}
