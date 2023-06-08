import FooterBottom from "./footer-bottom/footer-bottom.component";
import FooterTop from "./footer-top/footer-top.component";
import NewsLetter from "./newsletter/newsletter.component";

import "./footer.styles.scss";

const Footer = () => {
    return(
        <footer>
            {/* <NewsLetter /> */}
            <FooterTop />
            {/* <FooterBottom /> */}
        </footer>
    )
}
export default Footer;