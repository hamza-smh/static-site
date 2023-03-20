import { useContext } from 'react';
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';
import { WhyUsContext } from '../../../../contexts/whyus.context';

const SliderIcon = () => {
    
    const {isSliderOpen , setIsSliderOpen} = useContext(WhyUsContext);
    const toggleIsSliderOpen = () => setIsSliderOpen(!isSliderOpen); 

    return(
        <div className='slider-icon' onClick={toggleIsSliderOpen}>
            {isSliderOpen? <BiChevronDown /> : <BiChevronUp />}
            
        </div>
    )
}
export default SliderIcon;