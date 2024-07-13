import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Sidebar = () => {
    const [extended , setExtended]= useState(false)
    const {onSent, newChat, prevPrompt, setRecentPromt}=useContext(Context)

    const loadPrompt = async(prompt)=>{
        setRecentPromt(prompt)
        await onSent(prompt)
    }
  return (
    <div className='sidebar'>
        <div className='top'>
            <img src={assets.menu_icon} onClick={()=>setExtended(prev=>!prev)} className='menu'/>
            <div onClick={()=>newChat()} className='new-chat'>
            
                <img src={assets.plus_icon} alt=''/>
                {extended&&<p>New Chat</p> }
            </div>
            {extended&&
            <div className='recent'>
                <p className='recent-title'>Recent</p>
                {prevPrompt.map((item,index)=>{
                    return(
                <div on onClick={()=>loadPrompt(item)} className='recent-entry'>
                    <img src={assets.message_icon}/>
                    <p>{item.slice(0,18)}...</p>
                </div>
                    )
                })}
            </div>}
        </div>
       
    </div>
  )
}

export default Sidebar