import "./footer-bottom.styles.scss";

const FooterBottom = () => {
    return(
        <>
         <div className="container footer-bottom clearfix">
            <div className="copyright">
                &copy; Copyright 2023 <strong><span>AMProtocolab</span></strong>. All Rights Reserved
            </div>
        </div>
        
        <div id="preloader"></div>
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-up-short"></i></a>
</>
    )
}
export default FooterBottom;