const PortfolioFilter = ({data,index}) => {
    const {name,filter,active} = data;
    return(
        <li 
            filter={filter}
            active = {active}
            index={index} 
            > {name}    
        </li>
    );
    
}
export default PortfolioFilter;