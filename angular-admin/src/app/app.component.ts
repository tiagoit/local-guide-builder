import { Component } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';

  constructor(private router: Router, private _hotkeysService: HotkeysService) {
    _hotkeysService.add(new Hotkey('shift+1', (event: KeyboardEvent): boolean => {
      this.router.navigate([`/events`]);
      return false;
    }));

    _hotkeysService.add(new Hotkey('shift+2', (event: KeyboardEvent): boolean => {
      this.router.navigate([`/cities`]);
      return false;
    }));

    _hotkeysService.add(new Hotkey('shift+3', (event: KeyboardEvent): boolean => {
      this.router.navigate([`/orgs`]); 
      return false;
    }));
  }
}
