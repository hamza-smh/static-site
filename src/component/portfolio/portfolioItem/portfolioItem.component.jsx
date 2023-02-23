import "./portfolioItem.styles.scss";

const PortfolioItem = ({displayImage,groupTitle,group}) =>{
    return(
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src={displayImage} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
                <h4>{groupTitle}</h4>
                <p>{group}</p>
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
        </div>
    )

}
export default PortfolioItem;