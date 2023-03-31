import "./projectInfo.styles.scss";


const ProjectInfo = ({data,index}) => {

    const {heading,description} = data;
    
    return(
        <>
            <li><strong>{heading}</strong>{description}</li>
        </>
    )
}
export default ProjectInfo;