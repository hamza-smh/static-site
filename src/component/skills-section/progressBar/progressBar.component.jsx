import "./progressBar.styles.scss";

const ProgressBar = ({title,val,id}) =>{
    return(
        <>
        <div class="progress">
            <span class="skill">{title} <i class="val">{val}%</i></span>
            <div class="progress-bar-wrap">
                <div class="progress-bar" id = {id} role="progressbar" aria-valuenow={`${val}`} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        </>
    );

}
export default ProgressBar;