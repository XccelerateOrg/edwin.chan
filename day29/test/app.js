let express = require("express")
let app = express();
let hbs = require("express-handlebars")

const peopleOfHongKong = {

    people: [

        {

        "last": "Adams", "first": "Ansel", "profession": "photographer",

        "born": "SanFrancisco"

        },

        {

        "last": "Muir", "first": "John", "profession": "naturalist",

        "born": "Scotland"

        },

        {

        "last": "Schwarzenegger", "first": "Arnold",

        "profession": "governator", "born": "Germany"

        },

        {

        "last": "Wellens", "first": "Paul", "profession": "author",

        "born": "Belgium"

        }

    ]

};

app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.get('/city', (req, res) => {
    res.render('city')
});


app.get('/hk', (req, res) => {
    res.render('city', { city: "Hong Kong" })
});


app.get('/singapore', (req, res) => {
    res.render('city', { city: "Singapore" })
});
app.get('/hkPeople', (req, res) => {
    res.render('hkPeople', peopleOfHongKong)
});

app.listen(8080, () => {
    console.log(`App is listening to port 8080`);
});