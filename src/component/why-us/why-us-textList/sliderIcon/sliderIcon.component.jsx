import { useContext } from 'react';
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';
import { WhyUsContext } from '../../../../contexts/whyus.context';

<<<<<<< Updated upstream
const SliderIcon = () => {
=======
const SliderIcon = ({selected,index}) => {
>>>>>>> Stashed changes
    
    const {isSliderOpen , setIsSliderOpen} = useContext(WhyUsContext);
    const toggleIsSliderOpen = () => setIsSliderOpen(!isSliderOpen); 

<<<<<<< Updated upstream
    return(
        <div className='slider-icon' onClick={toggleIsSliderOpen}>
            {isSliderOpen? <BiChevronDown /> : <BiChevronUp />}
            
=======
    return ( 
        <div className = 'slider-icon'>
        {
            selected === index ? < BiChevronUp /> : < BiChevronDown />
        }
>>>>>>> Stashed changes
        </div>
    )
}
export default SliderIcon;