const jsonServer = require('json-server')
const jwt = require('jsonwebtoken');
const cors = require('cors');

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ noCors: true })


server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);
server.options('*', cors());

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use(jsonServer.bodyParser)

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//     res.header('Access-Control-Allow-Headers', '*')
//     next()
// })

// Add custom routes before JSON Server router

const myValues = Object.values(router)
console.log(myValues[6].__wrapped__.password.currentPassword);


server.post('/auth/login', (req, res) => {
    const { username, password } = req.body

    console.log(username, password)

    if (username === "admin" && password === myValues[6].__wrapped__.password.currentPassword) {
        // public data
        let token = jwt.sign({ username, role: ["read_users"] }, 'this_is_a_private_key', { expiresIn: 8 * 60 * 60 });
        res.jsonp({
            success: true,
            username: username,
            pasword: password,
            token
        })
    }
    else {
        res.jsonp({
            success: false,
            message: 'username or password is incorrect'
        })
    }

})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server

server.use((req, res, next) => {
    let data = req.headers.authorization && req.headers.authorization.split(" ")
    if (data && data.length === 2) {
        let token = data[1]
        try {
            let decoded = jwt.verify(token, 'this_is_a_private_key');
            if (decoded.username) {
                next()
            } else {
                res.sendStatus(401) // ko có quyền (authorized)
            }
        } catch {
            res.sendStatus(401)
        }

        // console.log(token);
    } else {
        res.sendStatus(401)
    }
})

// Use default router
server.use(router)

// function normalizePort(val) {
//     var port = parseInt(val, 10);

//     if (isNaN(port)) {
//         // named pipe
//         return val;
//     }

//     if (port >= 0) {
//         // port number
//         return port;
//     }

//     return false;
// }

// var port = normalizePort(process.env.PORT || '3001');

// server.listen(port, () => {
//     console.log('JSON Server is running at port', port)
// })


// server.on('clientError', (err, socket) => {
//     console.log(err)
//     socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
// });


const PORT = process.env.PORT || 3001;

// Listen on port 3001
server.listen(PORT, () =>
    console.log(`Application is listening on port ${PORT}!`)
);

