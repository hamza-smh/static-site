import "./yourInfo.styles.scss";


const YourInfo = ({data, index}) => {
    const {placeholder,type,name,need}= data;
    return(
        <div className="form-group ">
            <input placeholder={placeholder} type={type} name={name} className="form-control" id={name} required={need} />
        </div>
    )
}

export default YourInfo;