import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  pageName: boolean = true;

  constructor(private _router: Router){
    this._router.events.subscribe(event => {
       if (this._router.url.startsWith('/auth')) {
        this.pageName = false;
      }
    });


    }
  ngOnInit() {
  }

}
