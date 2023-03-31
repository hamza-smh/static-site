
import { productData,category } from "./portfolioItem/portfolioItemList";
import { Fragment } from "react";

import "./portfolio.styles.scss";
import PortfolioItem from "./portfolioItem/portfolioItem.component";
import PortfolioFilter from "./portfolioFilter/portfolioFilter.component";
import { useState } from "react";

const Portfolio = () => {

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
                            productData?.map((item,index)=>
                            <PortfolioItem
                                data={item}
                                index={index} 
                                key={index}
                            />
                        )}
                       
                    </div>

                </div>
            </section>
    )
}
export default Portfolio;