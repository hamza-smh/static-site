import Navigation from "../../navigation/navigation";
import Footer from "../../footer/footer.component";
import "./portfolioDetails.styles.scss";

const PortfolioDetails = () => {
    return(
        <>
          <Navigation /> 
            {/* <div className="portfolio-details">   
                <div className="section-title">
                    <div className="title">
                        <a>Home</a>   /   Portfolio Details
                        <h3>Portfolio Details</h3>
                    </div>
                </div>
            </div>  */}
            

  {/* <!-- End Header --> */}

  <main id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="title" className="title">
      <div className="container">

        <ol className="addressTitle">
          <li><a href="/">Home</a></li>
          <li>   /   Portfolio Details</li>
        </ol>
        <h3>Portfolio Details</h3>

      </div>
    </section>
    {/* <!-- End Breadcrumbs --> */}

    {/* <!-- ======= Portfolio Details Section ======= --> */}
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        <div className="row ">

          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">

                <div className="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-1.jpg" alt="" />
                </div>

                <div className="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-2.jpg" alt="" />
                </div>

                <div className="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
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
    {/* <!-- End Portfolio Details Section --> */}

  </main>
  {/* <!-- End #main --> */}
            <Footer />
        </>
    );
}
export default PortfolioDetails;