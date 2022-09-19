import { useEffect, useState,useContext } from 'react' 
import { Link } from 'react-router-dom';
import "./search.css"
import { AppContext } from "../../context"
import axios from 'axios';
function Search2(){
 

    function xoa_dau(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }



    const{save,info,saveData,data,setEve,setThem,them}=useContext(AppContext)
  
    const [add,setAdd]=useState("")
    const [tim,setTim]=useState([])
    const [isn,setIsn]=useState(true)
    
    
    
    const fetchFact = () => {
        axios.get(`http://localhost:5000/api/clinic/supplier`)
        .then(res => {
          const persons = res.data;
          setTim(persons.posts);
        })
        .catch(error => console.log(error));
        }    
    useEffect(() => {
        fetchFact()
        setAdd("")
        },[]);
   
   
    function saveAdd(e){
        setAdd(e.target.value)
        setIsn(false)
        }

    
 
    
    useEffect(() => {
        let phone= tim.filter((item)=>{
            return xoa_dau(item.phone.toString(10).toLowerCase()).indexOf(xoa_dau(add.toLowerCase())) !== -1
        })
        console.log(info)
        if(info.username===""||isn===false){
            if(phone.length>0){
                save(phone[0])
            }
            else if(phone.length==0){
                save(
                    {
                        username:"",
                address:"",
                phone:"",
                email:"",
                    }
                )
            }
            if(add==""){
                 save(
                    {
                        username:"",
                address:"",
                phone:"",
                email:"",
                    }
                )
            }
        }
     
        },[add]);

        console.log(info)


    function detail(e){
        e.preventDefault()
        save({
            _id:"",
            username:"",
            address:"",
            phone:"",
            email:"",
        })
        setEve(true)
        setThem(!them)
    }
    
    
    
    
    
    return(
        <div className='search_main'>
            <div className='search_title'> Danh sách nhà cung cấp</div>
            <div className='search_container'>
                <div className='search_text'>Tìm Kiếm Nhà Cung Cấp</div>
                <input type="text" onChange={saveAdd} className='search_input' placeholder='Nhập tên nhà cung cấp'/>
                <button onClick={detail} className='search_button'><Link className='Link' to="/">THÊM MỚI</Link></button>
            </div>
        </div>
    )
}

export default Search2