import React, {useState} from 'react'
import Img from "../img/img.png"
import Attach from '../img/attach.png'
import { useChatContext} from "../hooks/useChatContext";
import { useChats } from "../hooks/useChats";


export const Input = () => {
  const {_messages, chat_date} = useChatContext()
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)
  const { updateChat, chats, err } = useChats();

  const handleSend = async()=>{
    var date = null

    if (!chat_date || chat_date == null){
      date = new Date().toISOString()
      console.log(date)
    }
    else{
      date = chat_date

    }
    await updateChat(date, text)
    
    
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
