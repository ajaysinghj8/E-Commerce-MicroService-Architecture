/* @license
 * Copyright pLzOO Inc. All Rights Reserved.
 * Project: identity.server
 * File: server.ts
 * Author: Ajay Singh <meajaysingh@hotmail.com> 
 */

import * as Koa from 'koa';
import * as Debug from 'debug';
import { RouteTimeReqRes, Route404, RoutesApiV1  } from './lib/Routes';

import './lib/storage';

let logger = Debug('Identity:server');
let Application = new Koa();

Application.use(RouteTimeReqRes);
Application.use(RoutesApiV1.routes());
Application.use(RoutesApiV1.allowedMethods());
Application.use(Route404);



export {Application};
