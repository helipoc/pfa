const express = require('express');
const app = express();
const ClientRouter = require('./Routes/ClientRoutes');
const ColisRouter = require('./Routes/ColisRoutes');
const DeliveryRouter = require('./Routes/DeliveryRoutes');
const WarehouesRouter = require('./Routes/WarehouseRoutes');
app.use(express.json());
app.use('/client', ClientRouter);
app.use('/colis', ColisRouter);
app.use('/delivery', DeliveryRouter);
app.use('/warehouse', WarehouesRouter);

app.listen(3000, () => {
  console.log('[+] Server up ..');
});
