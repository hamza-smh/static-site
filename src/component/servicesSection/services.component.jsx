import ServiceCard from "./serviceCard/serviceCard.component";
import "./services.styles.scss";
import { ourServices } from "./serviceList.component";

const Services =() =>{

   


    return(
        <>
        <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row-service">
                    {
                        ourServices?.map((item,index)=>
                            <ServiceCard
                                data={item}
                                index={index} 
                                key={index}
                            />
                    )}

                    </div>
                </div>
            </section>
        </>
    )

}
export default Services;