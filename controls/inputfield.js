module.exports.InputField = class InputField {
    constructor(label, placeholder, value){
        this.label = label;
        this.placeholder = placeholder;
        this.value = value;
    }

    process(data) {}

    render() {
        return `
            ${this.label} <input type="text" value="${this.value}" placeholder="${this.placeholder}" />
        `;
    }
}