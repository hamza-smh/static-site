const PortfolioFilter = ({data,index,selected,setSelected}) => {
    const {name,filter} = data;
    return(
        <>
        <li onClick={()=>setSelected(index)}
            filter={filter}
            index={index} 
             className={selected === index? "":""}
            > {name}    
        </li>
        </>
    );
    
}
export default PortfolioFilter;