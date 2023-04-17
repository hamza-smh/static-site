import "./yourInfo.styles.scss";


const YourInfo = ({data, index}) => {
    const {placeholder,type,name}= data;
    return(
        <div className="form-group col-md-3">
            <input placeholder={placeholder} type={type} name={name} className="form-control" id={name} required />
        </div>
    )
}

export default YourInfo;