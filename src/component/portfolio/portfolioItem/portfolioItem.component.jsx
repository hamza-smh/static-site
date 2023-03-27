import "./portfolioItem.styles.scss";
import {AiOutlinePlus} from 'react-icons/ai';
import {FaLink,FaPlus} from 'react-icons/fa';
import Gallery from "./gallery/gallery.component";


const PortfolioItem = ({data, index}) =>{
    const {displayImage,groupTitle,group} = data;
    return(
        // <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className=" portfolio-item filter-app">    
            <div className="portfolio-img"><img src={displayImage} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
                <h4>{groupTitle}</h4>
                <p>{group}</p>

                {/* <a href="assets/img/portfolio/{`${displayImage}`}.jpg" data-gallery="portfolioGallery"  */}

                <a href= ""className="portfolio-lightbox preview-link" title="App 1">
                        <i><FaPlus /></i>
                </a>
                    
                <a href="portfolio-details.html" className="details-link" title="More Details">
                    <i><FaLink /></i></a>
            </div>
        </div>
    )

}
export default PortfolioItem;