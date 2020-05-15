let express = require('express')
let app = express()
let hbs = require('express-handlebars')

const menu = {
    food :[
        {
            'menu':'1','pizza': 'Neapolitan Pizza','drinks':'beer','desserts':'Maltesers tiramisu','sideDishes':'fries'
        },
        {
            'menu':'2','pizza': 'Chicago Pizza','drinks':'coke','desserts':'mango fool','sideDishes':'creamed spinach'
        },
        {
            'menu':'3','pizza': 'New York- Style Pizza','drinks':'juice','desserts':'apple tart','sideDishes':'Green Bean Casserole Bundles'
        },
        {
            'menu':'4','pizza': 'Sicilian Pizza','drinks':'hard soda','desserts':'pudding','sideDishes':'Cauliflower Tots'
        }
    ]
}

app.use(express.static(__dirname + "/public"))

app.engine('handlebars', hbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/menu', (req, res) => {
    res.render('menu',menu)
})

app.get('/gallery', (req, res) => {
    res.render('gallery')
})

app.listen(8000, () => {
    console.log(`App is listening to port 8000`);

})