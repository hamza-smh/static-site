const YourInfo = ({data, index}) => {
    const {label,type,name}= data;
    return(
        <div className="form-group col-md-6">
            <label htmlFor="name">{label}</label>
            <input type={type} name={name} className="form-control" id={name} required />
        </div>
    )
}

export default YourInfo;