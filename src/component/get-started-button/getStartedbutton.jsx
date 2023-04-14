import "./getstarted.styles.scss";


const BUTTON_STYLE_CLASSES = {
    transparent: 'transparent',
    inverted   : "inverted",
    solid : "solid",


}
const GetStartedButton = ({buttonType,buttonText}) =>{
    return(
        
             <button className = {`button ${BUTTON_STYLE_CLASSES[buttonType]}`} > {buttonText} </button>
    );

}
export default GetStartedButton;