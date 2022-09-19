import { useEffect, useState,useContext } from 'react' 
import { Link } from 'react-router-dom';
import { AppContext } from "../../context"
import "./list.css"
import axios from 'axios';
function List(){
  const{save,info,saveData,data,setEve}=useContext(AppContext)
  const [fact, setFact] = useState([])
  const [bat, setBat] = useState(true)
  const fetchFact = () => {
    axios.get(`http://localhost:5000/api/clinic/supplier`)
    .then(res => {
      const persons = res.data;
      setFact(persons.posts)
      saveData(persons.posts);
    })
    .catch(error => console.log(error));
    }    
    useEffect(() => {
    fetchFact()
    },[bat]);
  
    function Sua(item){
      save(item)
      setEve(false)
    }
   
    function Delete(item){
      axios.delete(`http://localhost:5000/api/clinic/supplier/${item._id}`)
      .then(res => {
         setBat(!bat)
      })
     
    }
   
   return(
    <div className='list_main'>
    <table className='list_table sub'>    
    <tr className=''>
      
      
      <th className='item1'>STT</th>
      
      <th className='item2'>ID</th>
      
      <th className='item3'>Tên</th>
      
      <th className='item4'>Địa chỉ</th>
      
      <th className='item5'>Số Điện Thoại</th>
      
      <th className='item6'>Email</th>
      
      <th className='item7'>Action</th>
      
    </tr>
    </table>
    <div className='sss'>
    <table className='list_table sub2'>   
    {data.map((item,index)=>{
    return(
      <>
      <tr>
      
         <th className='tem1'>{index+1}</th>
         
         <th className='tem2'>{item._id}</th>
         
         <th className='tem3'>{item.username}</th>
         
         <th className='tem4'>{item.address}</th>
         
         <th className='tem5'>0{item.phone}</th>
         
         <th className='tem6'>{item.email}</th>
         
         <th className='tem7'>
            <div>
               <button className='list_sua but' onClick={(e)=>{
                e.preventDefault()
                Sua(item)}}><Link className='Link' to="/">Sửa</Link></button>
               <button className='list_xoa but'onClick={(e)=>{
                e.preventDefault()
                Delete(item)}}
               >Xóa</button>
            </div>
         </th>
      </tr>
      </>
    )
  })}
  </table>  
  </div> 
  </div>
   
   )
}
export default List