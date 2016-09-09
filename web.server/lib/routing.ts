import { Context } from 'koa';
import * as Debug from 'debug';
const logger = Debug('backend:routing');

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

export async function RouteStatic(ctx: Context, next) {
    ctx.body = 'static';
}

export async function RouteApp(ctx: Context, next) {
    ctx.body = 'ngApp';
}