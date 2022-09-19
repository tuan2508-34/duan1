import { useContext,useState,useRef,useEffect} from "react"     
import { AppContext} from "../../context"
import Search2 from "../search/search2";
import "./page2.css"
import axios from 'axios';
function Page2(){
  
    const{info,save,eve,saveData,setEve,setThem,them}=useContext(AppContext)
    
    const [name,setName]=useState(info.username)
    const [ten,setTen]=useState()
    const [address,setAddress]=useState(info.address)
    const [diachi,setDiachi]=useState()
    const [phone,setPhone]=useState(info.phone)
    const [sdt,setSdt]=useState()
    const [email,setEmail]=useState(info.email)
    const [thu,setThu]=useState()
    const [valName,setValName]=useState("")
    const [valAddress,setValAddress]=useState("")
    const [valPhone,setValPhone]=useState("")
    const [valEmail,setValEmail]=useState("")
    const [xn,setXn]=useState("")
    
    const user={
        username:info.username,
        address:info.address,
        phone:info.phone,
        email:info.email,
      }
    function saveName(e){
        let value=e.target.value
        if(value =="") {
          setName("")
          save({...info,username:""})
        }
        else{
          save({...info,username:value})
        }
        
      }
    function saveAdd(e){
        let value=e.target.value
        if(value =="") {
          save({...info,address:""})
        }
        else{
          save({...info,address:value})
        }
      }
    function savePhone(e){
        let value=e.target.value
        if(value =="") {
          save({...info,phone:""})
        }
        else{
          save({...info,phone:value})
        }
        
        
      }
    function saveEmail(e){
        let value=e.target.value
      
        
        if(value =="") {
          save({...info,email:""})
        }
        else{
          save({...info,email:value})
        }
          
                
      }
      
      useEffect(() => {
            
        setValName("")
        setValAddress("")
        setValPhone("")
        setValEmail("")
        setXn("")
        },[them]);
    
   


  

   

    function Post(e){
       
       e.preventDefault()
       let vnf_regex = /((9|3|7|8|5)+([0-9]{8})\b)/g
       let atpos = info.email.indexOf("@");
       let dotpos = info.email.lastIndexOf(".");
       if((atpos >= 1 && ( dotpos - atpos >= 2 ))&&info.username!==""&&user.address!=""&&user.phone!=""&&user.email!=""&&user.username!=undefined&&user.address!=undefined&&user.phone!=undefined&&user.email!=undefined&&vnf_regex.test(info.phone) === true){
          save({...info,username:"",address:"",phone:"",email:""})
          axios.post(`http://localhost:5000/api/clinic/supplier`, { user })
         
          setValName("")
          setValAddress("")
          setValPhone("")
          setValEmail("")
          setXn("Đã thêm nhà cung cấp !")
          .then(res => {
            
          })
        }
      
        
       


       if(info.username==""||info.username===undefined){
        setValName("! Tên không được để trống")
        
       }
       else if(info.username!=""||info.username!=undefined){
        setValName("")
       }


       if(info.address==""||info.address===undefined){
        setValAddress("! Địa chỉ không được để trống")
        
       }
       else if(info.address!=""||info.address!=undefined){
        setValAddress("")
       }

       
      
       
       if(info.phone===""||info.phone===undefined){
        setValPhone("! Số điện thoại không được để trống")
       }
       else if(info.phone!=""||info.phone!=undefined){
        console.log(vnf_regex.test(info.phone))
        if(vnf_regex.test(info.phone) === true){
          setValPhone("")
          
        }
        else if (vnf_regex.test(info.phone) == false){
          setValPhone("số điện thoại không hợp lệ")
        }
        
       }

        
      


       if(atpos < 1 || ( dotpos - atpos < 2 )){
        setValEmail("! email phải có dạng xxx@xxx.xxx")
       }
       else if(info.email==""||info.email===undefined){
        setValEmail("! email không được để trống")
        
       }
       else if(info.email!=""||info.email!=undefined){
        setValEmail("")
       }
      


       
      }
   
    function Put(e){
      e.preventDefault()
      let vnf_regex = /((9|3|7|8|5)+([0-9]{8})\b)/g
      let atpos = info.email.indexOf("@");
      let dotpos = info.email.lastIndexOf(".");
      console.log(atpos,dotpos - atpos)
      if(info.username!==""&&user.address!=""&&user.phone!=""&&user.email!=""&&user.username!=undefined&&user.address!=undefined&&user.phone!=undefined&&user.email!=undefined&&vnf_regex.test(info.phone) === true){
        
         if(atpos >= 1 && ( dotpos-atpos >= 2 )){
          save({...info,username:"",address:"",phone:"",email:""})
  
       
          axios.put(`http://localhost:5000/api/clinic/supplier/${info._id}`, { user })
       
        
          setValName("")
          setValAddress("")
          setValPhone("")
          setValEmail("")
          setXn("Đã cập nhật nhà cung cấp !")

        
         }
        
         
      
        
      }
      if(info.username==""||info.username===undefined){
        setValName("! Tên không được để trống")
        
       }
       else if(info.username!=""||info.username!=undefined){
        setValName("")
       }


       if(info.address==""||info.address===undefined){
        setValAddress("! Địa chỉ không được để trống")
        
       }
       else if(info.address!=""||info.address!=undefined){
        setValAddress("")
       }

       
      
       
       if(info.phone===""||info.phone===undefined){
        setValPhone("! Số điện thoại không được để trống")
       }
       else if(info.phone!=""||info.phone!=undefined){
        console.log(vnf_regex.test(info.phone))
        if(vnf_regex.test(info.phone) === true){
          setValPhone("")
          
        }
        else if (vnf_regex.test(info.phone) == false){
          setValPhone("số điện thoại không hợp lệ")
        }
        
       }

        
      


      if(atpos < 1 || ( dotpos - atpos < 2 )){
        setValEmail("! email phải có dạng xxx@xxx.xxx")
       }
       else if(info.email==""||info.email===undefined){
        setValEmail("! email không được để trống")
        
       }
       else if(info.email!=""||info.email!=undefined){
        setValEmail("")
       }
      
  
      }

     
      console.log(info.email)
    

    return(
        <> 
          <Search2/>
           <div className="main_form">
           <form className="form">
             <div className="form_cont">
             <div className="form_title">Thông tin nhà cung cấp</div>
             <div>
             <label >Tên nhà cung cấp:</label><br/>
             <input type="text" value={info.username} 
                 onChange={saveName}
                 placeholder="nhập vào tên"/>
             <div className="err">{valName}</div>
             </div>
             <div>
             <label >Địa chỉ nhà cung cấp:</label><br/>
             <input type="text" value={info.address}  
                 onChange={saveAdd}
                 placeholder="nhập vào địa chỉ"/>
              <div className="err">{valAddress}</div>
              </div>
              <div>
             <label >Số Điện Thoại: +84</label><br/>
             <input type="text" value={info.phone}  
                 onChange={savePhone}
                 placeholder="nhập vào số điện thoại"/>
              <div className="err">{valPhone}</div>
              </div>
              <div>
             <label >Địa chỉ email:</label><br/>
             <input type="text" value={info.email}  o
                 onChange={saveEmail} 
                 placeholder="nhập vào địa chỉ email"/>
              <div className="err">{valEmail}</div>
              </div>
              <div className="tb">{xn}</div>
              </div>
              {eve ? 
              <button   onClick={Post}  >Gửi</button> : 
              <button   onClick={Put}  >Cập nhật</button>
              }
           </form>
          
           
           
           </div>
        </>
    )
}
export default Page2