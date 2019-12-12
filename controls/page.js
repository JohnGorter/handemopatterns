
module.exports.Page = class Page {
    constructor() {  this.controls = []; }

    add(control) {  this.controls.push(control);   } 

   
    processRequest(request) {
        let htmloutput = `
            <html>
            <head></head>
            <body><form method="post">
        `;
        for (let c of this.controls) {
            console.log("rendering control" + c.id);
            c.process(request.body);
            htmloutput += c.render();
        }
        htmloutput += `</form></body></html>`;
        return htmloutput;
    }
};