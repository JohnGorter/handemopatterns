module.exports.Button = class Button {
    constructor(id, title, callback){
        this.id = id;
        this.title = title;
        this.callback = callback;
    }

    process(data) {
        if (`btn${this.id}` in data) {
            if (this.callback) this.callback(); 
        }
    }

    render() {
        return `
            <input type="submit" name="btn${this.id}" value="${this.title}" />
        `;
    }
}