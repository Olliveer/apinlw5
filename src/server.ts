import { http } from './http';
import './websocket/client';
import './websocket/admin';

// eslint-disable-next-line no-console
http.listen(3333, () => console.log('SERVER RUNNING :D'));
