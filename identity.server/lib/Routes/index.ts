/* @license
 * Copyright pLzOO Inc. All Rights Reserved.
 * Project: identity.server
 * File: lib/Routes/index.ts
 * Author: Ajay Singh <meajaysingh@hotmail.com> 
 */

import { Context } from 'koa';
import * as Debug from 'debug';

const logger = Debug('Identity:routing');




export * from './v1';

export async function RouteTimeReqRes(ctx: Context, next) {
    const start = +new Date();
    await next();
    const ms = +new Date() - start;
    logger(`${ctx.method} ${ctx.url} - ${ms}ms`);
    ctx.set('X-Response-Time', `${ms}ms`);
}

export async function Route404(ctx: Context, next) {
    ctx.status = 404;
    ctx.body = '404';
}
