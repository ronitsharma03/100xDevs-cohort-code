import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';

const server = http.createServer(function(request: any, response: any){
    console.log((new Date()), " source requested from ", request.url);
    response.end("Hi there!");
});

const wss = new WebSocketServer({ server });

wss.on('connection', function (ws){
    ws.on('error', function(){
        console.error
    });

    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data, { binary: isBinary });
            }
        });
    });
    
})

server.listen(8080, function(){
    console.log((new Date()), " Server is running on 8080....");
})