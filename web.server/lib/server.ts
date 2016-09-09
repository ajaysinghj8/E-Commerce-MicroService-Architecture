import * as Koa from 'koa';
import { Context } from 'koa';
import * as Debug from 'debug';


const logger = Debug('backend:server');

const Application = new Koa();

import {Route404, RouteTimeReqRes, RouteStatic, RouteApp} from './routing';
Application.use(RouteTimeReqRes);
Application.use(RouteStatic); // will be served by nginx
Application.use(RouteApp);
Application.use(Route404);



export default Application;
