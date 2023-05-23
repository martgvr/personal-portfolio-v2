import './content.css'
import React from 'react'

import ContentEditor from '../ContentEditor/ContentEditor'
import ContentHeader from '../ContentHeader/ContentHeader'
import ContentFooter from '../ContentFooter/ContentFooter'
import ContentTerminal from '../ContentTerminal/ContentTerminal'

function Content() {
  return (
    <article className='content__container' id='contentContainer'>
      <ContentHeader />
      <ContentEditor />
      <ContentTerminal />
      <ContentFooter />
    </article>
  )
}

export default Content