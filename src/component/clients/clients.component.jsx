import React from "react";
import "./client.styles.scss";
import { allClients } from "./clientsList.component";



const Client = () => {

    return(
        <>
            <section id="clients" className="clients section-bg">
                <div className="trail" data-aos="zoom-in">
                    {allClients.map((item,index) =>(
                            < div className = "brand-names" key={index}>
                            <img src={allClients[index].client} className="img-fluid" alt= "" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
export default Client;
