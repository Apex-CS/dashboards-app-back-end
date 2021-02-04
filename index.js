const app = require('express')();
const PORT = process.env.PORT || 1337;
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');


app.use(bodyParser.json(),cors());

// Handler errors
app.use((err, req, res, next) => {
  if (! err) {
    return next();
  }

  res.status(500);
  res.send('500: Internal server error');
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
  console.log(`Back end app listening on port ${PORT}!`);
});