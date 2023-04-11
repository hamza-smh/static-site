import "./map.styles.scss";
const Map =() =>{
    return(
            
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.297601654602!2d67.0919214143213!3d24.921929748930378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3503eed2af%3A0xb79dcaee0626f7fc!2sGulshan%20Chowrangi%20Bus%20Stop!5e0!3m2!1sen!2s!4v1680952144874!5m2!1sen!2s"             
            className="map"  
            allowFullScreen={true} loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">    
        </iframe>
    )
}
export default Map;