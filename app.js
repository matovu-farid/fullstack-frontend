const http = require('http')

const PORT = 3000

const server = http.createServer((req, res)=>{ 
	res.write("This server is awesome")
	res.end() 
})
console.log('Server started')
server.listen(PORT)
