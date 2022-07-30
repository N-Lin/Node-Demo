const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


//const taskController = require('./controller/task.controller')
const itemController = require('./controller/item.controller')

const app = express();

const port = 3050;

app.use(bodyParser.json());

app.get('/api/items', (req, res) => {
    itemController.getItems().then(data => res.json(data));
});

app.post('/api/item', (req, res) => {
    itemController.createItem(req.body.item).then(data => res.json(data));
});

app.put('/api/item', (req, res) => {
    itemController.updateItem(req.body.item).then(data => res.json(data));
});

app.delete('/api/item/:id', (req, res) => {
    itemController.deleteItem(req.params.id).then(data => res.json(data));
});



app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})