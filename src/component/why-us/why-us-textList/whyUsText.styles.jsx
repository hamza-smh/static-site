import styled from "styled-components";
// .why-us .accordion-list li+li {
//   margin-top: 15px;
// }
export const TextOutside = styled.span `
  color: #343a40;
  font-weight: 600;
  font-size: 16px;
  padding-right: 10px;
`
export const SliderIconButton = styled.button `
    background-color: white;
    border: none;
    color: #343a40;
  

`

export const Slider = styled.a `
  //padding: 5%;
  display: inline-flex;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  width: 100%;
  justify-content: space-between;
    &.active {
     ${TextOutside}{
       color: #47b2e4; 
     }
  
     ${SliderIconButton}{
       color: #47b2e4; 
     } 
    }
  &:hover{
    ${TextOutside}{
      color: #47b2e4; 
    }
  &:hover{
    ${SliderIconButton}{
      color: #47b2e4; 
    } 
  
`

export const WhyUsBlock = styled.li`
  padding: 20px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  display: block;


@media (max-width: 991px) {

}
`

export const Count = styled.span `
  color: #47b2e4;
  font-weight: 600;
  font-size: 18px;
  padding-right: 10px;
  display: inline-flex;
`
export const ChevronIcon = styled.span `
    padding: 0px;
`




