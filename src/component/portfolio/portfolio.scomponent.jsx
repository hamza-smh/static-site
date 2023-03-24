import App1 from "../../brand/assets/img/portfolio/portfolio-1.jpg";
import Web3 from "../../brand/assets/img/portfolio/portfolio-2.jpg";
import App2 from "../../brand/assets/img/portfolio/portfolio-3.jpg";
import Card2 from "../../brand/assets/img/portfolio/portfolio-4.jpg";
import Web2 from "../../brand/assets/img/portfolio/portfolio-5.jpg";
import App3 from "../../brand/assets/img/portfolio/portfolio-6.jpg";
import Card1 from "../../brand/assets/img/portfolio/portfolio-7.jpg";
import Card3 from "../../brand/assets/img/portfolio/portfolio-8.jpg";
import Web1 from "../../brand/assets/img/portfolio/portfolio-9.jpg";

import { Fragment } from "react";

import "./portfolio.styles.scss";
import PortfolioItem from "./portfolioItem/portfolioItem.component";
import PortfolioFilter from "./portfolioFilter/portfolioFilter.component";
import { useState } from "react";

const Portfolio = () => {

    const data = [
        {
            displayImage : App1, 
            groupTitle : "App1",
            group:"App"
        },
        {
            displayImage : App3,
            groupTitle : "App3",
            group : "App",
        },
        {
            displayImage : Web3,
            groupTitle : "Web3",
            group : "Web",
        },
        {
            displayImage : Web2,
            groupTitle : "Web2",
            group : "Web",
        },
        {
            displayImage : Web1,
            groupTitle : "Web1",
            group : "Web",
        },
        {
            displayImage : App2,
            groupTitle : "App2",
            group : "App",
        },
        {
            displayImage : Card2,
            groupTitle : "Card2",
            group : "Card",
        },
        {
            displayImage : Card1,
            groupTitle : "Card1",
            group : "Card"
        },
        {
            displayImage : Card3,
            groupTitle : "Card3",
            group : "Card",
        }
    ];
const category=[
    {
        name: "All",
        filter : "*",
    },
    {
        name : "App",
        filter : "app",
    },
    {
        name : "Card",
        filter : "card",
    }, 
    {
        name: "Web",
        filter: "web",
    }
];
    const [selected,setSelected] = useState(0);

    return(
        <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <ul id="portfolio-flters">
                        {
                            category?.map((item,index)=>
                            <PortfolioFilter 
                                data = {item}
                                index ={index}
                                selected={selected}
                                setSelected={setSelected} 
                                key={index}
                            />
                            
                        )}
                        {/* <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li> */}

                    </ul>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        {
                            data?.map((item,index)=>
                            <PortfolioItem
                                data={item}
                                index={index} 
                            />
                        )}
                       
                    </div>

                </div>
            </section>
    )
}
export default Portfolio;