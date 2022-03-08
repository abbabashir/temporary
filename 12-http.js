const http = require('http');

const server = http.createServer((req,res) =>{
    if (req.url === '/') {
        res.end('Welcome To The Home Page')
    }
    if (req.url === 'about') {
        res.end("This is the about pae")
    }
    res.end(`
    <h1>Oops something went wrong!</h1>
    <p>page not fount</p>
    <a href="/">Home page</a>
    `)
})

server.listen(5000)