import Navigation from "../../navigation/navigation";
import Footer from "../../footer/footer.component";
import "./portfolioDetails.styles.scss";
import ProjectInfo from "./ProjectInfo/projectInfo.component";
import ImageSwiper from "./imageSwiper/imageSwiper.component";
import { info } from "../portfolioItem/portfolioItemList";

const PortfolioDetails = () => {
  
  return(
      <>
        <Navigation /> 
          <main id="main">
            <section id="title" className="title">
              <div className="container">
            
                <ol className="addressTitle">
                  <li><a href="/">Home</a></li>
                  <li>   /   Portfolio Details</li>
                </ol>
                <h3>Portfolio Details</h3>
            
              </div>
            </section>
            
            <section id="portfolio-details" className="portfolio-details">
              <div className="container">
            
                <div className="row ">
            
                  <div className="col-lg-8">
                    <div className="portfolio-details-slider swiper">
                      <div className="swiper-wrapper ">

                       <ImageSwiper />

                      </div>
                      <div className="swiper-pagination"></div>
                    </div>
                  </div>
                      
                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <h3>Project information</h3>
                      <ul>
                        {
                          info?.map((item,index)=>
                            <ProjectInfo 
                              data={item} 
                              index={index} 
                              key={index} />)
                        }
                      </ul>
                    </div>
                    <div className="portfolio-description">
                      <h2>This is an example of portfolio detail</h2>
                      <p>
                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                      </p>
                    </div>
                  </div>
                      
                </div>
                      
              </div>
            </section>
          </main>

          <Footer />
      </>
  );
}
export default PortfolioDetails;