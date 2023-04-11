import 'bootstrap/dist/css/bootstrap.css';
import './infobox.css'
  
  
  function Infobox  (props) {
    return(
    <div className='infoboxcont'>
    <div className="infobox col-lg-12 col-md-12 col-sm-12" id={props.id}>
        <img src={props.imgsrc} alt="A space themed AI generated watercolour "/>
       <h2>{props.title}</h2>
        <p>{props.text}</p>
       <br/>
      <br/>
      <ul>
        <li>Increases engagement and retention by transforming UX</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>
      <button type="button" class="btn btn-success">Click Me</button>
    
    </div>
    </div>
    );
   
    }
    export default Infobox;