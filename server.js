const express = require('express');
const app = express();
const multer = require('multer');
const hbs = require('express-hbs');
const path = require('path');
const DSLR_FOLDER = '/Camos/resources/dslr/';

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', hbs.express4({
    partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, DSLR_FOLDER);
    },
    filename(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage});

app.get('/', (req, res, next) => {
    res.render('index');
});

app.post('/api/dslr', upload.array('photos', 12), (req, res, next) => {
    res.redirect('/');
});

app.listen(8080, () => {
    console.log('DSLR Server running on port 8080');
});