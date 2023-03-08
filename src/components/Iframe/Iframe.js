function Iframe (props){
    return(
        <div className="Iframeclass">
            <iframe src={props.iframe} title={props.iframetitle} id={props.id}></iframe>

        </div>



    )
}




export default Iframe