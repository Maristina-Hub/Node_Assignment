const express = require('express')
const app = express()
const items = require('./routes/router.js')

app.use(express.urlencoded({ extended: false}))
app.use(express.json())


app.use(items)

const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})
