import "./pricing.styles.scss";
import Plan from "./plan/plan.component";

const Pricing = () => {

    const plan =[
        {
            title : "Free Plan",
            price : "0",
            buttonType :"transblue",
            strike : "na",
            deactivate :true

        },
        {
            title : "Business Plan",
            price : "29",
            buttonType : "inverted",
            strike: "",
            deactivate: false,
        },
        {
            title : "Developer Plan",
            price : "49",
            buttonType : "transblue",
            strike: "",
            deactivate: false,
        }
]
    return(
        <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Pricing</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
{
    plan?.map((item,index)=>
    <Plan 
        data = {item}
        index={index}
        key={index}
    />)
}
                    {/* <Plan title="Free Plan" price="0" buttonType="transblue" strike = "na" deactivate />
                    <Plan title="Business Plan" price="29" buttonType= "inverted" />
                    <Plan title="Developer Plan" price="49" buttonType= "transblue" /> */}

  

                    </div>

                </div>
            </section>
    );
}
export default Pricing;