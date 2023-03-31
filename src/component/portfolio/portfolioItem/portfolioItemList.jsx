import App1 from"../../../brand/assets/img/portfolio/portfolio-1.jpg";
import Web3 from"../../../brand/assets/img/portfolio/portfolio-2.jpg";
import App2 from "../../../brand/assets/img/portfolio/portfolio-3.jpg";
import Card2 from "../../../brand/assets/img/portfolio/portfolio-4.jpg";
import Web2 from "../../../brand/assets/img/portfolio/portfolio-5.jpg";
import App3 from "../../../brand/assets/img/portfolio/portfolio-6.jpg";
import Card1 from "../../../brand/assets/img/portfolio/portfolio-7.jpg";
import Card3 from "../../../brand/assets/img/portfolio/portfolio-8.jpg";
import Web1 from "../../../brand/assets/img/portfolio/portfolio-9.jpg";

export const productData = [{
        displayImage: App1,
        groupTitle: "App1",
        group: "App",
        id: 1
    },
    {
        displayImage: App3,
        groupTitle: "App3",
        group: "App",
        id: 2
    },
    {
        displayImage: Web3,
        groupTitle: "Web3",
        group: "Web",
        id: 3,
    },
    {
        displayImage: Web2,
        groupTitle: "Web2",
        group: "Web",
        id: 4
    },
    {
        displayImage: Web1,
        groupTitle: "Web1",
        group: "Web",
        id: 5
    },
    {
        displayImage: App2,
        groupTitle: "App2",
        group: "App",
        id: 6
    },
    {
        displayImage: Card2,
        groupTitle: "Card2",
        group: "Card",
        id: 6
    },
    {
        displayImage: Card1,
        groupTitle: "Card1",
        group: "Card",
        id: 7
    },
    {
        displayImage: Card3,
        groupTitle: "Card3",
        group: "Card",
        id: 8
    }
];

export const category = [{
        name: "All",
        filter: "*",
    },
    {
        name: "App",
        filter: "app",
    },
    {
        name: "Card",
        filter: "card",
    },
    {
        name: "Web",
        filter: "web",
    }
];

export  const info = [    
       {
          heading : "Category",description : ": Web design"
       },
       {
          heading : "Client", description : ": ASU Company",
       },
       {
          heading : "Project date", description : ": 01 March, 2020",
       },
       {
          heading : "Project URL ",
          description : <a href='https://www.example.com'>: Example Website</a>
       }         
  ]
