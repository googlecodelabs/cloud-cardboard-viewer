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

import 'es6-shim';
import 'es6-promise';
import '../../node_modules/zone.js/dist/zone'
import 'reflect-metadata'

// Angular 2
import {enableProdMode} from '@angular/core';

// enable prod for faster renders
enableProdMode();

import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

// Application
import {App} from '../app/app.component';
import {routes} from '../app/app.routes';

bootstrap(App, [
  ...HTTP_PROVIDERS,
  provideRouter(routes)
]);
