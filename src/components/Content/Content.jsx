import './content.css'
import React from 'react'

import ContentEditor from '../ContentEditor/ContentEditor'
import ContentHeader from '../ContentHeader/ContentHeader'
import ContentFooter from '../ContentFooter/ContentFooter'
import ContentTerminal from '../ContentTerminal/ContentTerminal'
import ContentMain from '../ContentMain/ContentMain'

function Content() {
  return (
    <article className='content__container' id='contentContainer'>
      <ContentHeader />
      <ContentMain />
      <ContentFooter />
    </article>
  )
}

export default Content