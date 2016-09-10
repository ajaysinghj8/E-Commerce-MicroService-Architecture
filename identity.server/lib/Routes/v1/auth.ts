/* @license
 * Copyright pLzOO Inc. All Rights Reserved.
 * Project: identity.server
 * File: lib/Routes/v1/auth.ts
 * Author: Ajay Singh <meajaysingh@hotmail.com> 
 */

import { Context } from 'koa';
import * as Debug from 'debug';
import * as Router from 'koa-router';
import { AuthJwt } from '../../controllers';

const logger = Debug('identity:routing:v1:auth');

export const RoutesApiV1Auth = new Router();

RoutesApiV1Auth.post('/register', AuthJwt.register); 
RoutesApiV1Auth.post('/login', AuthJwt.login); 
RoutesApiV1Auth.get('/logout', AuthJwt.logout);
RoutesApiV1Auth.post('/logout', AuthJwt.logout);  
RoutesApiV1Auth.post('/refreshSession', AuthJwt.refresh); 