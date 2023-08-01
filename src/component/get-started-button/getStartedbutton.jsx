import "./getstarted.styles.scss";
import { Link } from 'react-router-dom';


const BUTTON_STYLE_CLASSES = {
    transparent: 'transparent',
    inverted   : "inverted",
    solid : "solid",
    normal: "normal"


}
const GetStartedButton = ({ buttonType, buttonText, linkTo }) => {
  return (
    <Link to={linkTo}>
      <button className={`button ${BUTTON_STYLE_CLASSES[buttonType]}`}>
        {buttonText}
      </button>
    </Link>
  );
};

export default GetStartedButton;