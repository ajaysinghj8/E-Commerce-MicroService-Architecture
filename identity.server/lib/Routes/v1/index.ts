/* @license
 * Copyright pLzOO Inc. All Rights Reserved.
 * Project: identity.server
 * File: lib/Routes/v1/index.ts
 * Author: Ajay Singh <meajaysingh@hotmail.com> 
 */

import { Context } from 'koa';
import * as Debug from 'debug';
import * as Router from 'koa-router';

import { RoutesApiV1Auth } from './auth';

const logger = Debug('identity:routing:v1');


async function RouteApiHome(ctx: Context, next) {
    ctx.body = {
        endpoint: '/api'
    };
}

async function RouteApiV1Home(ctx: Context, next) {
    ctx.body = {
        version: '1',
        endpoint: '/api/v1'
    };
}

export const RoutesApiV1 = new Router();

RoutesApiV1.get('/api', RouteApiHome);
RoutesApiV1.get('/api/v1', RouteApiV1Home);
RoutesApiV1.use('/api/v1/auth', RoutesApiV1Auth.routes());
RoutesApiV1.use('/api/v1/auth', RoutesApiV1Auth.allowedMethods());


