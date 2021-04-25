import config from './../config/config';
import app from './express';

import mongoose from 'mongoose';

mongoose.Promise = global.Promise; //configures mongoose to use native ES6 promises 
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`);
})

app.listen(config.port, (err) => {
    if(err){
        console.log(err);
    }
    console.info("Server started on port %s.", config.port);
})