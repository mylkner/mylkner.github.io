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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("palindrome"),
        link: "https://mylkner.github.io/Palindrome-Checker/",
    },
    {
        name: "Roman Numeral Converter",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("roman"),
        link: "https://mylkner.github.io/Roman-Numeral-Converter/",
    },
    {
        name: "Phone Number Validator",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("phoneNum"),
        link: "https://mylkner.github.io/Phone-Number-Validator/",
    },
    {
        name: "Pokemon Index",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("pokemon"),
        link: "https://mylkner.github.io/Pokemon-Search-App/",
    },
];

const reactProjectData = [
    {
        name: "Random Quote Machine",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("quote"),
        link: "https://mylkner.github.io/random-quote-machine/",
    },
    {
        name: "Markdown Previewer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("markdown"),
        link: "https://mylkner.github.io/markdown-previewer/",
    },
    {
        name: "Drum Machine",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("sound"),
        link: "https://mylkner.github.io/drum-machine/",
    },
    {
        name: "Calculator",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("calc"),
        link: "https://mylkner.github.io/calculator/",
    },
    {
        name: "25 + 5 Clock",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("25cl"),
        link: "https://mylkner.github.io/255clock/",
    },
    {
        name: "To Do App",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("todo"),
        link: "https://mylkner.github.io/todo_app",
    },
];

const d3ProjectData = [
    {
        name: "Bar Chart",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("bar"),
        link: "https://mylkner.github.io/Bar-Chart/",
    },
    {
        name: "Scatterplot Graph",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("scatter"),
        link: "https://mylkner.github.io/Scatterplot-Graph/",
    },
    {
        name: "Heat Map",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("heat"),
        link: "https://mylkner.github.io/Heat-Map/",
    },
    {
        name: "Choropleth Map",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("choro"),
        link: "https://mylkner.github.io/Choropleth-Map/",
    },
    {
        name: "Treemap Diagram",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
        image: getCoverImg("treemap"),
        link: "https://mylkner.github.io/Treemap-Diagram/",
    },
];

const mernProjectData = [
    {
        name: "Sudoku",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor eros, auctor vitae mauris id, mollis aliquet enim.",
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
