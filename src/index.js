import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  const splittedUsername = req.query.username.split(/\?|\/|@/)
    .filter(e => e);
  const indexOfName = splittedUsername.findIndex((elem, index) => {
    return index <= 2 && elem.indexOf('.') != -1;
  }) + 1;
  res.send('@' + splittedUsername[indexOfName]);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
