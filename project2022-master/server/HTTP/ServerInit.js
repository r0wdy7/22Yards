const express = require('express');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser')


function ServerInit(conf) {
    const app = express();

    app.use(xss());

    app.use((req, res, next) => {
        res.setHeader("X-Powered-By", "Java Spring");
        next();
    })

    app.enable("trust proxy");

    app.use(express.json({extended: true}));
    app.use(express.urlencoded({extended : true}));
    app.use(cookieParser());

    console.log(
        conf.primaryInfo.isDevMode
            ? "Configured in Dev Mode"
            : "Configure in Production Mode"
    );
    
    app.listen(conf.primaryInfo.serverPort,()=>{
        console.log(`Server is listening on Port ${conf.primaryInfo.serverPort}`)
    })

    app.use('/', (req, res, next)=>{
        console.log(req.method);
        console.log(req.url);
        next();
    })

    return app;
}

module.exports = ServerInit;