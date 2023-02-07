const express = require('express');
const app = express();
const ClientRouter = require('./Routes/ClientRoutes');

app.use('/client', ClientRouter);
app.listen(3000, () => {
  console.log('[+] Server up ..');
});
