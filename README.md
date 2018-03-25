# O2 Bootstrap4 Component

# _o2-bootstrap4-component_ Navigation Header Component Library for Bootstrap4
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)


_o2-bootstrap4-component-consumer_ is a sample consumer project for _o2-bootstrap4-component_ .

_Sample Program for setting config data_,
<https://github.com/ohtsu/o2-bootstrap4-component-consumer/>

_Video Explanation (English)_,
<https://youtu.be/>

_Video Explanation (Japanese)_,
<https://youtu.be/>


## Overview 
   - _o2-bootstrap4-component_ is an easy navigation header tool based on _ng-bootstrap_ (version 1.0) for Angular5
   - 8 main colors of Bootstrap are supported
    (dark,light,primary,secondary,success,info,warning,danger)
   - You can change menu titles by config data. 
   - You can customize the log image by config data.
   - You can customize the brand by config data.
   - You can add dropdown lists.
   - You can get click events of Buttons and so on.
   - You can set routing data (routerLink) by config data.


## Prerequisite

   - node.js
   - Typescript2
   - Angular5
   - ng-bootstrap

## Installation of the sample consumer project

To download this consumer project, in your command line, type as follows:

```bash
$ git clone https://github.com/Ohtsu/o2-bootstrap4-component-consumer.git

```
Change into the project directory

```bash
$ cd o2-bootstrap4-component-consumer 
```

To install it, run simply:

```bash
$ npm install 
```

## Start project

If you start local server as follows, you can get a navigation header of Bootstrap4 in your browser by accessing **http://localhost:4200**.


```bash
$ ng serve 
```
  - ***First Page*** 

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_first_page01.png" width= "640" >

### Sample Config Data

You can change settings of the navigation bar by configData as follows.

```TypeScript
  private initializeData() {
    this.configData = {
      "Color": {
        "baseColor": "warning",
      },
      "Logo": {
        "id": "logo",
        "name": "DigiPub",
        "visible": false,
        "imageUrl": "assets/images/DigiPub_logo_HighReso01.png",
        "rlink": "/",
      },
      "Brand": {
        "id": "brand",
        "name": "DigiPub",
        "visible": false,
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

```

#### Color

Set your favorite color in Color.baseColor.


##### dark
<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_color_dark01.png" width= "640" >

##### light
<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_color_light01.png" width= "640" >

##### primary
<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_color_primary01.png" width= "640" >

##### secondary
<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_color_secondary01.png" width= "640" >

##### success
<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_color_success01.png" width= "640" >

##### info
<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_color_info01.png" width= "640" >

##### warning
<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_color_warning01.png" width= "640" >

##### danger
<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_color_danger01.png" width= "640" >

#### Logo Image

If you want to add your own logo image, you need to add your logo image file into `assets/images` directory.

Then edit `Logo.imageUrl` of the configData.

And set `Logo.visible` true.

<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_logo_true01.png" width= "640" >

#### Brand

If you want to add your brand, set `Brand.visible` true.

Then edit `Brand.name` and `Brand.rlink`of the configData.

rlink means routerLink string.

And set `Brand.visible` true.

<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_brand_true01.png" width= "640" >

#### Dropdown List

If you want to add dropdown lists, set `Menu.dropdown` true as follows.

Then add `submenu`.

Its stricture is the same as `Menu`.


```TypeScript
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

```


<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_dropdown_true01.png" width= "640" >

#### Searchbox

If you want to add searchbox, set `Search.visible` true.

<img src="https://raw.githubusercontent.com/Ohtsu/images/master/o2-bootstrap4-component/navigation_header_searchbox_true01.png" width= "640" >



### app.component.html

If you set the configData, `app.component.html` structue is very simple as follows.
 
```html

<o2-bootstrap4-component-header [configData]="configData" (buttonClick) ="navButtonClick($event)"></o2-bootstrap4-component-header>

<router-outlet></router-outlet>

```





## Version

   - o2-bootstrap4-component-consumer : 0.5.0
   - o2-bootstrap4-component          : 0.5.0
   - Angular5                         : 5.2.0
   - TypeScript                        : 2.5.3
   - @ng-bootstrap/ng-bootstrap        : 1.0.0




## Reference

- "Angular5 Custom Library: The definitive, step-by-step guide", 
<https://www.udemy.com/draft/1461368/learn/v4/content>

- "Angular5用 カスタムライブラリの作成", 
<https://www.udemy.com/draft/1450138/learn/v4/content>



## Change Log

 - 2018.3.22 version 1.0 uploaded 

## Copyright

copyright 2018 by Shuichi Ohtsu (DigiPub Japan)
