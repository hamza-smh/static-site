import DisplayGallery from "./displayGallery/display.component";

import "./gallery.styles.scss";

const Gallery = () => {
   
    return(
        <div className="darkBackground">
            <div>
                <DisplayGallery />
            </div>
            <button>right</button>
            <button>left</button>
        </div>
    );
}
export default Gallery;