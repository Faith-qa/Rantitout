import React from 'react'
import { Navbar} from '../components/Navbar'
import { Search } from '../components/Search'
import { Chats } from '../components/Chats'
import NewChat from './NewChat'
import { ThemeToggle } from './ThemeToggle'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <NewChat/>
      <Chats/>

    </div>
  )
}
