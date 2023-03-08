import "./section-title.styles.scss";

const SectionTitle = ({title}) =>{
    return(
        <div className="section-title " id = "sectionTitle">
            <h2>{title}</h2>
        </div>
    )
}
export default SectionTitle;