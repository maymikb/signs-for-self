const fs = require('fs')
const inquirer = require('inquirer')

const {SVG, Shape, Text} = require("./lib/svg")

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "What is your logo text?",
    },

    {
        type: "input",
        name: "textColor",
        message: "What is the text color?",
    },

    {
        type: "list",
        name: "logoShape",
        message: "What is your logo's shape?",
        choices: ["circle", "square", "triangle"]
    },

    {
        type: "input",
        name: "shapeColor",
        message: "What is the color of your shape?",
    },
])
    .then(answers => {
        
        const myShape = new Shape(answers.shapeColor)
        const shapeCode = myShape.render();

        const myText = new Text(answers.text, answers.textColor);
        const textCode = myText.render();


        const mySVG = new SVG(shapeCode, textCode);

        const svgCode = mySVG.render();

        let shape = answers.logoShape;

        fs.writeFile(`./examples/${shape}.svg`, svgCode, function () {
            console.log("Generated logo.svg")
            console.log(`Logo generated at ${__dirname}/examples/${shape}.svg`);
        })
    })