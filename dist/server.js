import express from "express"
import path from 'path'
const app = express();
const configJson = await import('./config.json', { assert: { type: 'json' } });

app.use(express.static("./"));

app.get('*', function(req, res){
    res.sendFile(path.resolve("./", "index.html"))
});
app.listen(9000, () => {
})
app.post('/save', function(req, res) {
    console.log('debug: /save');
    return res.status(200).json({});
});

app.post('/publish', function(req, res) {
    console.log('debug: /publish');
    return res.status(200).json({});
});

app.post('/validate', function(req, res) {
    console.log('debug: /validate');
    return res.status(200).json({});
});

app.post('/stop', function(req, res) {
    console.log('debug: /stop');
    return res.status(200).json({});
});

app.post('/execute', function(req, res) {
    console.log('debug: /execute');
    return res.status(200).json({});
});
