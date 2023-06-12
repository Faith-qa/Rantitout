import React from "react";

interface Message{
    message: any;
}

const ChatMessage = ({message}: {message: Message}) => {


    return(
        <div className='chat-message'>
              <div className='chat-message-center'>
              <div className='avatar'>
              </div>
              <div className='message'>
                {message.message}
              </div>

              </div>
            </div>
    )

}

export default ChatMessage