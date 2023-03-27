import App1 from "../../../../../brand/assets/img/portfolio/portfolio-1.jpg"
import Web3 from "../../../../../brand/assets/img/portfolio/portfolio-2.jpg"
import App2 from "../../../../../brand/assets/img/portfolio/portfolio-3.jpg"
import Card2 from "../../../../../brand/assets/img/portfolio/portfolio-4.jpg"
import Web2 from "../../../../../brand/assets/img/portfolio/portfolio-5.jpg"
import App3 from "../../../../../brand/assets/img/portfolio/portfolio-6.jpg"
import Card1 from "../../../../../brand/assets/img/portfolio/portfolio-7.jpg"
import Card3 from "../../../../../brand/assets/img/portfolio/portfolio-8.jpg"
import Web1 from "../../../../../brand/assets/img/portfolio/portfolio-9.jpg"




const DisplayGallery = () =>{
     const data = [{
             displayImage: App1,
             groupTitle: "App1",
             group: "App"
         },
         {
             displayImage: App3,
             groupTitle: "App3",
             group: "App",
         },
         {
             displayImage: Web3,
             groupTitle: "Web3",
             group: "Web",
         },
         {
             displayImage: Web2,
             groupTitle: "Web2",
             group: "Web",
         },
         {
             displayImage: Web1,
             groupTitle: "Web1",
             group: "Web",
         },
         {
             displayImage: App2,
             groupTitle: "App2",
             group: "App",
         },
         {
             displayImage: Card2,
             groupTitle: "Card2",
             group: "Card",
         },
         {
             displayImage: Card1,
             groupTitle: "Card1",
             group: "Card"
         },
         {
             displayImage: Card3,
             groupTitle: "Card3",
             group: "Card",
         }
     ];
    

    return(
        <div className="fullDisplayImage" >
            {
                    // data?.map((item,index)=>
                    <div> 
                        <img src= {data[1].displayImage} />
                    </div>
                    //)
                }
        </div>
    );
}

export default DisplayGallery;