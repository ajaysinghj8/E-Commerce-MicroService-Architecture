/* @license
 * Copyright pLzOO Inc. All Rights Reserved.
 * Project: identity.server
 * File: config/index.ts
 * Author: Ajay Singh <meajaysingh@hotmail.com> 
 */


/*global process*/
import { join } from 'path';
import { readFileSync } from 'fs';
import * as Debug from 'debug';

const logger = Debug('www:config');
let Configuration: any = {};

try {
    let path:string = join(process.cwd(), 'config', (process.env.NODE_ENV || 'development') + '.json');
    Object.assign(Configuration,
        JSON.parse(readFileSync(path), 'utf-8')
        );
} catch (ex) {
    logger(new Error('Configuration file not found for ' + (process.env.NODE_ENV || 'development') + ' environment.'));
    process.exit(1);
}

export {Configuration};





