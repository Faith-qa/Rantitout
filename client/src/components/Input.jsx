import React from 'react'
import Img from "../img/img.png"
import Attach from '../img/attach.png'
import { useChatContext} from "../hooks/useChatContext";

export const Input = () => {
  const {_messages, chat_date} = useChatContext()
  const [text, setText] = useState("")

  const handleSend = ()

  return (
    <div className='input'>
      <input type="text" placeholder='Type something ...' onChange={e=>setText(e.target.value)}/>
      <div className="send">
        <img src={Attach} alt=""/>
        <input type='file' style={{display:"none"}} id= 'file'/>
        <label htmlFor='file'>
          <img src={Img} alt=""/>
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}
