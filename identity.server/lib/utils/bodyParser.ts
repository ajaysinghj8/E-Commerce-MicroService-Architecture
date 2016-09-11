/* @license
 * Copyright pLzOO Inc. All Rights Reserved.
 * Project: identity.server
 * File: utils/bodyParser.ts
 * Author: Ajay Singh <meajaysingh@hotmail.com> 
 */

import * as Body from 'body/any';
import { Context } from 'koa';

export const bodyParser = (ctx: Context): Promise<any> => {
    return new Promise((resolve, reject) => {
        Body(ctx.req, ctx.res, {}, (error, form) => {
            if (error) return reject(error);
            return resolve(form);
        });
    });
}