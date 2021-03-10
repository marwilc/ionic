import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) =>
      toggleDarkTheme(mediaQuery.matches)
    );

    // Add or remove the "dark" class based on if the media query matches
  }
}

function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('dark', true);
}
