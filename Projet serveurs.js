const express = require('express');
const app = express();

const employeesRouter = require('./routes/employees');

app.use(express.json());
app.use('/employees', employeesRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
