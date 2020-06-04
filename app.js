const express = require('express')
const app = express()
const port = 2900

app.use(express.static(__dirname + '/public'))
app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/main.html');
});
    
app.listen(port, () => console.log(`Express server running on port ${port}`));
