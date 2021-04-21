import express from 'express';

import './database';

const app = express();

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('SERVER RUNNING :D'));
