import {FaGithub, FaLinkedin} from "react-icons/fa"
import { StyleFooter } from "../styles";


function Footer(){
    return (
      <StyleFooter> 
        <div>
          <p>Criado por Mariana Lima</p>
          <a href="https://github.com/Medusa-85" target="_blank" ><FaGithub/></a>
          <a href="https://www.linkedin.com/in/mariana-lima-4739a989/" target="_blank" ><FaLinkedin/></a>
             
        </div> 
      </StyleFooter>
    )
  }
  
  export default Footer;