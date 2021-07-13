const express = require('express')
const app = express()
var t = require('C:/Users/Admin/brain-time/testmodule.js')

app.use(express.static("project-files"));

app.get('/', function (req, res) {
    res.send('Hello world')
})

app.listen(process.env.PORT || 80, function () {
    console.log('Server started...')
});


t.test();