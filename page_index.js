let express = require('express');
let app = express(); 
let { Page } = require('./controls/page.js')
let { Button } = require('./controls/button.js')
let { InputField } = require('./controls/inputfield.js')
let { Label } = require('./controls/label.js')


let johnpage = new Page();
johnpage.add(new Button('1', 'press me!'));
let otherpage = new Page();

let lblTest = new Label('lbl1', '-nothing-');
let buttona = new Button('2', 'press me again!', () =>{
    console.log("aauw!");
    lblTest.label = "aauw!";
});

otherpage.add(lblTest)
otherpage.add(new Button('1', 'press me!'));
otherpage.add(buttona);
otherpage.add(new InputField('uw naam', 'naam', '')); 

let pages = {
    'john.page': johnpage, 
    'other.page': otherpage
};


app.use(express.urlencoded())

app.get('/:page', (req, res) => {
    res.end(pages[req.params.page].processRequest(req));
});
app.post('/:page', (req, res) => {
    console.log("posted a page");
    res.end(pages[req.params.page].processRequest(req));
});


app.listen(8080, () => {
    console.log("I am ready")
})