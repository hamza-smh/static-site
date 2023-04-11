import "./newsletter.styles.scss";

const NewsLetter = () => {
    return ( 
        <>
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="content col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post" className="form-input">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewsLetter;