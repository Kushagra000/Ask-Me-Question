import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
const Sidebar = () => {
    const [extended , setExtended]= useState(false)
  return (
    <div className='sidebar'>
        <div className='top'>
            <img src={assets.menu_icon} onClick={()=>setExtended((prev)=>!prev)} className='menu'/>
            <div className='new-chat'>
            
                <img src={assets.plus_icon} alt=''/>
                {extended&&<p>New Chat</p> }
            </div>
            {extended&&
            <div className='recent'>
                <p className='recent-title'>Recent</p>
                <div className='recent-entry'>
                    <img src={assets.message_icon}/>
                    <p> What is react...</p>
                </div>
            </div>}
        </div>
        <div className='bottom'>
            <div className='bottom-icon recent-entry'>
                <img src={assets.question_icon}/>
                {extended&&<p>Help</p>}
            </div>
            <div className='bottom-icon recent-entry'>
                <img src={assets.history_icon}/>
                {extended&&<p>Activity</p>}
            </div>
            <div className='bottom-icon recent-entry'>
                <img src={assets.setting_icon}/>
                {extended&&<p>Settings</p>}
            </div>
        </div>
    </div>
  )
}

export default Sidebar