// Chargement le module http
import http from 'http';

const server = http.createServer( (req, resp) => {
    resp.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
    resp.end('Bonjour, je suis Node.js héhé !');
});

const port = 3000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
    console.log(`Serveur HTTP démarré sur http://${hostname}:${port}`);
});


