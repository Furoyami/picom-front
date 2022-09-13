import { Component,} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'picom';

  public get homePageOrNot(): boolean {
    if (this._router.url.startsWith('/home')) {
      // console.log(this._router.url)
      return false;
    } else {
      return true;
    }
  }

  constructor(private _router: Router) { }

}