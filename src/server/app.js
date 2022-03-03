const app = require('./index.js');
const port = process.env.PORT || 8081;

app.listen(port, () =>{
  console.log(`listening at ${port}`);
});
