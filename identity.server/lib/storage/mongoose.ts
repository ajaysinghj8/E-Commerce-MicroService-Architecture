import { connect, connection } from 'mongoose';

import { Configuration } from '../../config';

connect(Configuration.mongo.uri);
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
    console.log("we're connected!");
});

import '../models';

export {connection as MongooseClient};

