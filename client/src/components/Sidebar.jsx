import React from 'react'
import { Navbar} from '../components/Navbar'
import { Search } from '../components/Search'
import { Chats } from '../components/Chats'
import CreateNew from './CreateNew'


export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <CreateNew/>
      <Chats/>
    </div>
  )
}
