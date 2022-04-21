import express from 'express';
import * as url from 'url'

// Create a new express application instance
const app = express()
// Mount a new route handler on the default path "/"
const port = 3000

const di_rname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(di_rname + "/public"));

app.get('/', (req, res) => {
  res.sendFile(di_rname + "/public/html/test.html")
})

app.get('/api/:id', (req, res) => return_name(req, res))


app.listen(port, () => {
  console.log(`App on port ${port}`)
})

function return_name(req, res) {
    res.json({id: req.params.id})
}
export {return_name}