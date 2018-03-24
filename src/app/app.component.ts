import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  configData: any;

  constructor() {
    this.initializeData();
  }

  navButtonClick(param: any) {
    if (param.button === 'search') {
      console.log('search text --', param.text);
    } else {
      console.log('button lind --', param.button);
      console.log('text --', param.text);
    }
  }
  private initializeData() {
    this.configData = {
      "Color": {
        "baseColor": "danger",
      },
      "Logo": {
        "id": "logo",
        "name": "DigiPub",
        "visible": true,
        "imageUrl": "assets/images/DigiPub_logo_HighReso01.png",
        "rlink": "/",
      },
      "Brand": {
        "id": "brand",
        "name": "DigiPub",
        "visible": true,
        "rlink": "/",
      },
      "Search": {
        "id": "search",
        "name": "Search",
        "visible": true,
        "rlink": "/",
      },
      "Menu": [
        {
          "id": "m01",
          "dropdown": false,
          "submenu": [],
          "visible": true,
          "title": "Home",
          "rlink": "/",
        },
        {
          "id": "m02",
          "dropdown": false,
          "submenu": [],
          "visible": true,
          "title": "About",
          "rlink": "/about",
        },
        {
          "id": "m03",
          "dropdown": false,
          "submenu": [],
          "visible": true,
          "title": "User",
          "rlink": "/user",
        },
        {
          "id": "m04",
          "dropdown": true,
          "visible": true,
          "title": "Dropdown",
          "rlink": "/detail/child",
          "submenu": [
            {
              "id": "m0401",
              "dropdown": false,
              "visible": true,
              "title": "Home",
              "rlink": "/",
            },
            {
              "id": "m0402",
              "dropdown": false,
              "visible": true,
              "title": "About",
              "rlink": "/about",
            },
            {
              "id": "m0403",
              "dropdown": false,
              "visible": true,
              "title": "User",
              "rlink": "/user",
            },
          ],
        }
      ],
    };

  }
}
