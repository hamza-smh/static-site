import {useContext} from 'react';
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';


const SliderIcon = ({selected,index}) => {
    

    return ( 
        <div className = 'slider-icon'>
        {
            selected === index ? < BiChevronUp /> : < BiChevronDown />
        }
        </div>
    )
}
export default SliderIcon;