import React from 'react'
import './contentmain.css'
import ContentEditor from '../ContentEditor/ContentEditor'
import ContentTerminal from '../ContentTerminal/ContentTerminal'

function ContentMain() {
  return (
    <div className='contentmain__container flex-row'>
        <ContentEditor />
        <ContentTerminal />
    </div>
  )
}

export default ContentMain