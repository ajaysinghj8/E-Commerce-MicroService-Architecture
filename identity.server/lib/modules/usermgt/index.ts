/* @license
 * Copyright pLzOO Inc. All Rights Reserved.
 * Project: identity.server
 * File: lib/modules/usermgt/index.ts
 * Author: Ajay Singh <meajaysingh@hotmail.com> 
 */


import * as _ from 'lodash';
import { PlzooUser } from '../../models';
import * as jwt from 'jsonwebtoken';
import { Configuration } from '../../../config';

export class UserManagement {
    static async register(user) {
        await validateRegistration(user);
        user.username = user.username.toLowerCase();
        user.email = user.email.toLowerCase();
        await isNewUser(user);
        _.assign(user, PlzooUser.encryptPassword(user.password));
        delete user.password;
        let newUser = new PlzooUser(_.pick(user, 'username', 'email', 'encrypted_password', 'password_salt'));
        await newUser.save();
    }
    static async login(user) {
        await isValidLoginParams(user);
        user.email = user.email.toLowerCase();
        const userDoc: any = await getUser(user);
        if (!userDoc) return Promise.reject(new Error('Email/password not valid!'));
        return await PlzooUser.validatePassword(user.password, userDoc.encrypted_password, userDoc.password_salt) ?
            createJwtToken(userDoc) :
            Promise.reject(new Error('Email/password not valid!'));
    }

    static logout() {

    }
    static validate(jwtToken) {
        return jwt.verify(jwtToken, Configuration.jwt.secret);
    }
    static decode(jwtToken){
        return jwt.decode(jwtToken);
    }

}



function createJwtToken(user) {
    user = user.toJSON();
    const payload = _.pick(user, '_id','username', 'email');
    return jwt.sign(payload, Configuration.jwt.secret, Configuration.jwt.options );
}

function validateRegistration(user) {
    let errors: any = [];
    if (!user.username) {
        errors.push({ username: 'required' });
    }
    else if (!/^[a-zA-Z0-9\-\_]+$/.test(user.username)) {
        errors.push({ username: 'only use letters, numbers, \'-\', \'_\'' });
    }

    if (!user.email) {
        errors.push({ email: 'required' });
    }
    else if (!/^[a-zA-Z0-9\-\_\.\+]+@[a-zA-Z0-9\-\_\.]+\.[a-zA-Z0-9\-\_]+$/.test(user.email)) {
        errors.push({ email: 'invalid email format' });
    }

    if (!user.password) {
        errors.push({ password: 'required' });
    }
    if (errors.length) return Promise.reject(errors);
    return Promise.resolve(user);
}

function isValidLoginParams(user) {
    let errors = [];
    if (!user.email)
        errors.push({ email: 'required' });
    if (!user.password)
        errors.push({ password: 'required' });
    if (user.email && user.email.indexOf('@') !== -1) {
        if (!/^[a-zA-Z0-9\-\_\.\+]+@[a-zA-Z0-9\-\_\.]+\.[a-zA-Z0-9\-\_]+$/.test(user.email)) {
            errors.push({ email: 'invalid email format' });
        }
    }
    if (errors.length) return Promise.reject(errors);
    return Promise.resolve(user);
}

function isNewUser(user) {
    return PlzooUser.findOne({ $or: [_.pick(user, 'username'), _.pick(user, 'email')] }).then(exsist => {
        if (exsist) return Promise.reject(new Error('User already exists!'));
        return Promise.resolve(user);
    });
}

function getUser(user) {
    let query = (user.email.indexOf('@') === -1) ? { username: user.email } : { email: user.email };
    return PlzooUser.findOne(query)
}


