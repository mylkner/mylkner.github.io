const imgs = require.context("./images", false);
const images = imgs.keys().map((image) => imgs(image));

const getCoverImg = (title) => {
    const regex = new RegExp(title, "gi");

    for (let i = 0; i < images.length; i++) {
        if (regex.test(images[i])) return images[i];
    }
};

const javaScriptProjectData = [
    {
        name: "Palindrome Checker",
        description:
            "My first project built with JavaScript. Enter something and it will tell you if it's a palindrome or not.",
        image: getCoverImg("palindrome"),
        link: "https://mylkner.github.io/Palindrome-Checker/",
    },
    {
        name: "Roman Numeral Converter",
        description:
            "A project utilising recursion to convert numbers into Roman numerals.",
        image: getCoverImg("roman"),
        link: "https://mylkner.github.io/Roman-Numeral-Converter/",
    },
    {
        name: "Phone Number Validator",
        description:
            "Performs validation on US phone number formats using a regular expression.",
        image: getCoverImg("phoneNum"),
        link: "https://mylkner.github.io/Phone-Number-Validator/",
    },
    {
        name: "Pokemon Index",
        description: "Returns info about a searched pokemon from an api.",
        image: getCoverImg("pokemon"),
        link: "https://mylkner.github.io/Pokemon-Search-App/",
    },
];

const reactProjectData = [
    {
        name: "Random Quote Machine",
        description:
            "Generates random quotes from an api and you can share them on twitter.",
        image: getCoverImg("quote"),
        link: "https://mylkner.github.io/random-quote-machine/",
    },
    {
        name: "Markdown Previewer",
        description: "Styles text using certain syntaxes.",
        image: getCoverImg("markdown"),
        link: "https://mylkner.github.io/markdown-previewer/",
    },
    {
        name: "Drum Machine",
        description:
            "Makes different noises depending on button pressed. You can also use your keyboard.",
        image: getCoverImg("sound"),
        link: "https://mylkner.github.io/drum-machine/",
    },
    {
        name: "Calculator",
        description: "Good project for parsing inputs.",
        image: getCoverImg("calc"),
        link: "https://mylkner.github.io/calculator/",
    },
    {
        name: "25 + 5 Clock",
        description:
            "A clock meant to improve work efficiency by promoting small breaks every set interval.",
        image: getCoverImg("25cl"),
        link: "https://mylkner.github.io/255clock/",
    },
    {
        name: "To Do App",
        description:
            "A simple to do app that uses dexie to perform CRUD operations with indexed db.",
        image: getCoverImg("todo"),
        link: "https://mylkner.github.io/todo_app",
    },
];

const d3ProjectData = [
    {
        name: "Bar Chart",
        description: "Bar Chart detailing US GDP from 1947 to 2015.",
        image: getCoverImg("bar"),
        link: "https://mylkner.github.io/Bar-Chart/",
    },
    {
        name: "Scatterplot Graph",
        description:
            "Scatterplot graph for cyclists relating the year of the tournament, their time, and whether or not they had doping allegations brought against them.",
        image: getCoverImg("scatter"),
        link: "https://mylkner.github.io/Scatterplot-Graph/",
    },
    {
        name: "Heat Map",
        description:
            "Heat map detailing the variance from the base monthly global land-surface temperature from 1753 to 2015.",
        image: getCoverImg("heat"),
        link: "https://mylkner.github.io/Heat-Map/",
    },
    {
        name: "Choropleth Map",
        description:
            "Choropleth map showing percentage of adults in the US age 25 and older with a bachelor's degree or higher from 2010 to 2014.",
        image: getCoverImg("choro"),
        link: "https://mylkner.github.io/Choropleth-Map/",
    },
    {
        name: "Treemap Diagram",
        description:
            "Treemap diagram for top 100 most sold videogames grouped by platform.",
        image: getCoverImg("treemap"),
        link: "https://mylkner.github.io/Treemap-Diagram/",
    },
];

const mernProjectData = [
    {
        name: "Sudoku",
        description:
            "Generates sudoku games using a backtracking algorithm. You can create an account to keep track of game history and some stats. First project with TailwindCSS, so UI is fairly simple.",
        image: getCoverImg("sudoku"),
        link: "https://sudoku-theta-flax.vercel.app/",
    },
];

export {
    javaScriptProjectData,
    reactProjectData,
    d3ProjectData,
    mernProjectData,
};
