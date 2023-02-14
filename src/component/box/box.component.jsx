import Client from "../clients/clients.component";
import Container from "../container/container.component";
import "./box.styles.scss";

const Box = () =>{
    return(
        <div className="box">
            <Container />
            <Client />
        </div>
    );
}
export default Box;