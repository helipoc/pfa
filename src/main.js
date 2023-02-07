const express = require('express');
const app = express();
const ClientRouter = require('./Routes/ClientRoutes');
const ColisRouter = require('./Routes/ColisRoutes');

app.use(express.json());
app.use('/client', ClientRouter);
app.use('/colis', ColisRouter);

app.listen(3000, () => {
  console.log('[+] Server up ..');
});
