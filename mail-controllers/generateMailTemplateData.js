const ejs = require("ejs");
const catchBlock =  require("../utils/errorHandler");
const {resolve} = require("path");

async function renderTemplate(data, event){
    try {
        const templatePath = resolve(`mail-templates/${event}.ejs`);
        const html = await ejs.renderFile(templatePath, data);
        return html;
    } catch (error) {
        catchBlock(error, "Rendering EJS Template");
    }
} 

module.exports = {
    renderTemplate
}
