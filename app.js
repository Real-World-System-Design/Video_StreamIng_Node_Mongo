const fastify = require('fastify')({
    logger: "true"
});

const routes = require('./routes/Car');

routes.forEach((route, index) => {
    fastify.route(route);
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fastify', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log(`sucessfully connected to the db`);
}).catch((e) => {
    console.log(e);
});

fastify.get('/', (req, rep) => {
    rep.send("hlo")
})

const start = async () => {

    fastify.listen(3000, (err, address) => {
        if(err) fastify.log.error(err);
        fastify.log.info(`server is runnign on ${address}`);
    })
}
start();