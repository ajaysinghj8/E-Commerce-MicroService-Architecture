'use strict';
/// <reference path="../typings/index.d.ts" />
import * as Debug from 'debug';
import * as Fs from 'fs';

const logger = Debug('www:config');
let configuration;
try {
    configuration = JSON.parse(Fs.readFileSync('./' + (process.env || 'development') + '.json', 'utf-8'));
} catch (ex) {
    debug('unable to read configuration ');
    debug(ex);
    process.exit(1);
}
export default configuration;






