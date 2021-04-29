import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { Server } from 'socket.io';
import './database';
import routes from './routes';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);

app.set('view enfine', 'html');

app.get('/pages/client', (request, respose) => respose.render('html/client.html'));
app.get('/pages/admin', (request, respose) => respose.render('html/admin.html'));

const http = createServer(app);
const io = new Server(http);

// io.on('connection', (socket: Socket) => {
//   // console.log('Se conectou', socket.id);
// });

app.use(express.json());
app.use(routes);

export { http, io };
