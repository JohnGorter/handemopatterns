function render(template, ...params) {
    let result = ``;
    for (let t in template){
        result += template[t];
        if (params[t]) result += params[t]
    }
    return result;
}



module.exports.index = {
    render(data) {
        let carlist = Object.values(data);
        return render`
        <html>
        <head>
        </head>
        <body>
        <ul>
            ${carlist.map(i => `<li>${i.make}</li>`).join("")}
        </ul>
        </body>`;
    }
}