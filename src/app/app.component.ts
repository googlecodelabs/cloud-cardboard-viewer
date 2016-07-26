// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { About } from './about.component';
import { Home } from './home.component';

@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
  }
}

@Component({
  selector: 'app',
  directives: [
    ...ROUTER_DIRECTIVES,
    XLarge
  ],
  styles: [`
  .router-link-active {
    text-decoration: underline;
  }
  `],
  template: `
  <div>
    <div id="sidebar">
      <nav>
        <a [routerLink]=" ['./'] ">Home</a>
        <a [routerLink]=" ['./about'] ">About</a>
      </nav>
    </div>
    <div class="mui-appbar" id="main-bar">
      <div class="mui-container-fluid">
        <nav class="mui-row" role="navigation">
          <div class="mui-col-sm-8 mui-col-sm-offset-2">
            Google Cloud Platform @ ng-conf 2016
          </div>
        </nav>
      </div>
    </div>
    <div id="content" class="mui-container-fluid">
      <main class="mui-row">
        <div class="mui-col-sm-8 mui-col-sm-offset-2">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  </div>
  `
})
export class App {}
