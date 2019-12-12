module.exports.Label = class Label {
    constructor(id, label){
        this.id = id;
        this.label = label;
    }

    process(data) {}

    render() {
        return `
            <span>${this.label} </span>
        `;
    }
}