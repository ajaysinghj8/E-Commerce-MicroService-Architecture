/* @license
 * Copyright pLzOO Inc. All Rights Reserved.
 * Project: identity.server
 * File: lib/controllers/authjwt.ts
 * Author: Ajay Singh <meajaysingh@hotmail.com> 
 */
import { Context } from 'koa';
import * as Debug from 'debug';
import { PlzooUser } from '../models';
import { bodyParser } from '../utils';

const logger = Debug('Identity:controller:authjwt');

const validateUserRegistration = (user: any) => {
    // if (user.email.indexOf('@') === -1) {
    //     conditions.username = username;
    //   }
    //   else {
    //     conditions.email = username.toLowerCase();
    //   }
    return user;
}

export class AuthJwt {
    static async register(ctx: Context) {
        let body = await bodyParser(ctx);
        let user = await validateUserRegistration(body);
        let userExists = await PlzooUser.findOne({ email: user.email });
        //duplicateUsernameCheck
        //duplicateEmailCheck
        //createUser
        //sendWelcomeEmail
        if (!userExists) {
            let newUser = await new PlzooUser(user).save();
            ctx.body = 'User created';
        }
        ctx.body = 'User already exists';
    }
    static async login(ctx: Context) {
        // login attempts
        // 
        let body = await bodyParser(ctx);
        let user = await PlzooUser.findOne

    }
    static async logout(ctx: Context) {

    }
    static async refresh(ctx: Context) {

    }
}