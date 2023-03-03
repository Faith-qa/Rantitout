import React, {useState} from 'react'
import Img from "../img/img.png"
import Attach from '../img/attach.png'
import { useChatContext} from "../hooks/useChatContext";
import { useChats } from "../hooks/useChats";


export const Input = () => {
  const {chat_date, dispatch} = useChatContext()
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)
  const { updateChat, loadMessages, chats, err } = useChats();

  const handleSend = async()=>{
   
    await updateChat(chat_date, text)
    //await loadMessages(chat_date)
    setText("")


   
   
    
    
  }
  

  return (
    <div className='input'>
      <input type="text" placeholder='Type something ...' onChange={e=>setText(e.target.value)} value={text}/>
      <div className="send">
        <img src={Attach} alt=""/>
        <input type='file' style={{display:"none"}} id= 'file' onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor='file'>
          <img src={Img} alt=""/>
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}
