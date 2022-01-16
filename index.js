const express = require('express')
const app = express()
const path = require('path')

const { engine } = require("express-handlebars");


app.use(express.static(path.join(__dirname, 'public')))

app.set('port', 3000)

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'))
})

// Handlebars
app.engine('.hbs', engine({
    defaultLayout: 'index',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    layoutsDir: path.join(app.get('views')),
    // partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')