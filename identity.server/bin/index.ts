/* @license
 * Copyright pLzOO Inc. All Rights Reserved.
 * Project: identity.server
 * File: bin/index.ts
 * Author: Ajay Singh <meajaysingh@hotmail.com> 
 */

import { Configuration } from '../config'
import { Application } from '../server';
import * as cluster from 'cluster';
import { cpus } from 'os';
import * as Debug from 'debug';

let logger = Debug('Identity:bin');

if (Configuration.cluster) {
    logger('Starting server in cluster mode with %s cpus ', cpus().length);
    if (cluster.isMaster) {
        for (let i = 0; i < cpus().length; i++) {
            cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            logger(`Worker ${worker.process.pid} died!`);
        });
    } else {
        Application.listen(Configuration.port);
        logger('Listing on port %s', Configuration.port);
    }
}
else {
    logger('Starting server in single thread mode');
    Application.listen(Configuration.port);
    logger('Listing on port %s', Configuration.port);
}
