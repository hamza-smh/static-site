import "./ctaSection.styles.scss";

const CTASection = () =>{
    return(
        <>
            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="holder col-lg-9 ">
                            <h3>Call To Action</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="cta-button-holder col-lg-3 cta-btn-container">
                            <a className="cta-btn align-middle" href="#">Call To Action</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CTASection;