import "./header.css"
import { RiExchangeBoxLine } from 'react-icons/ri';
import { VscServer } from 'react-icons/vsc'; 
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';
function Header(){
    return(
        <div className="main">
          <div className="header">
            
            <img className="header_logo" src="https://hospitalmedia.vn/wp-content/uploads/2018/09/favico-hospitalmedia.png"/>
            <div className="light"></div>
            <div className="header_item"> 
                <RiExchangeBoxLine className="icon"/>
                <div className="header_text">GIAO DỊCH</div>
            </div>
            <div className="light"></div>
            <div className="header_item"> 
                <VscServer className="icon"/>
                <div className="header_text">KHO</div>
            </div>
            <div className="light"></div>
            <div className="header_item"> 
                <div className="header_text"><Link className='Link' to="/Detail">CHI TIẾT</Link></div>
                <IoIosArrowForward className="icon2"/>
            </div>
          </div>
        </div>
    )
}

export default Header