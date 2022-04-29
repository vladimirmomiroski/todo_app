const express = require('express');

const { getMainRouteHandler } = require('../Controllers/getMainRouteHandler');
const { getTodosRouteHandler } = require('../Controllers/getTodosRouteHandler');
const { deleteTodoHandler } = require('../Controllers/deleteTodoHandler');
const { addTodoHandler } = require('../Controllers/addTodoHandler');
const { updateTodoHandler } = require('../Controllers/updateTodoHandler');

router = express.Router();

router.get('/', getMainRouteHandler);
router.get('/todos', getTodosRouteHandler);
router.post('/todos', addTodoHandler);
router.delete('/todos/:id', deleteTodoHandler);
router.patch('/todos/:id', updateTodoHandler);

module.exports = router;
