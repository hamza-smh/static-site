import "./yourInfo.styles.scss";


const YourInfo = ({data, onChange}) => {
    const {placeholder,type,name,need,value}= data;
    return(
        <div className="form-group ">
            < input className = "form-control"
                placeholder={placeholder} 
                type={type} 
                name={name} 
                id={name} 
                required={need}                 
                onChange={onChange}
                value={value}
                />
        </div>
    )
}

export default YourInfo;


