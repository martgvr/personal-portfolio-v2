import React from 'react'
import './contentterminal.css'
import ContentTerminalProject from '../ContentTerminalProject/ContentTerminalProject'

function ContentTerminal() {
  return (
    <div className='contentterminal__container' id='contentTerminal'>

      <div className='terminal__command flex-row'>
        <div className="terminal__command--arrows flex-row">
          <p>{`>`}</p><p>{`>`}</p><p>{`>`}</p>
        </div>

        <img src="folder.png" alt="" />
        <p>tech_stack</p>
        <p>ls</p>
      </div>

      <div className='terminal__techstack flex-row'>
        <div className='terminal__techstack--tech flex-column'>
          <img src="html.png" alt="" />
          <p>HTML</p>
        </div>

        <div className='terminal__techstack--tech flex-column'>
          <img src="css.png" alt="" />
          <p>CSS</p>
        </div>

        <div className='terminal__techstack--tech flex-column'>
          <img src="js.png" alt="" />
          <p>JS</p>
        </div>
      </div>

      <div className='terminal__command flex-row'>
        <div className="terminal__command--arrows flex-row">
          <p>{`>`}</p><p>{`>`}</p><p>{`>`}</p>
        </div>

        <img src="folder.png" alt="" />
        <p>professional_projects</p>
        <p>ls</p>
      </div>

      <div className='terminal__projects flex-row'>
        <ContentTerminalProject title={'KAAMS STYLE'} subtitle={`Desarrollo para el emprendimiento New Kaam's Style`} description={'E-commerce desarrollado en ReactJS y Firebase como DB'} deploy={'https://newkaams.netlify.app'} repository={'https://github.com/martgvr/new-kaams'}/>
        <ContentTerminalProject title={'TRIGORINAS'} subtitle={'Desarrollo para el emprendimiento Trigorinas'} description={'Landing page realizada en ReactJS con Firebase'} deploy={'https://trigorinas.netlify.app'} repository={'https://github.com/martgvr/trigorinas'} />
        <ContentTerminalProject title={'BOOST'} subtitle={'Desarrollo para el emprendimiento Boost'} description={'Landing page realizada en ReactJS'} deploy={'https://boostcdh.netlify.app'} repository={'https://github.com/martgvr/boost-cdh'} />
      </div>

      <div className='terminal__command flex-row'>
        <div className="terminal__command--arrows flex-row">
          <p>{`>`}</p><p>{`>`}</p><p>{`>`}</p>
        </div>

        <img src="folder.png" alt="" />
        <p>academic_projects</p>
        <p>ls</p>
      </div>

      <div className='terminal__projects flex-row'>
        <ContentTerminalProject title={'P_Final Backend'} subtitle={'Proyecto final del curso de backend de Coderhouse'} description={'Servidor Express desarrollado en NodeJS'} repository={'https://github.com/martgvr/final_project_backend'} />
        <ContentTerminalProject title={'P_Final JS'} subtitle={'Proyecto final del curso de Javascript de Coderhouse'} description={'Tracker de operaciones de criptomonedas realizado en Javascript'} repository={'https://github.com/martgvr/final_project_javascript'} deploy={'https://criptotracker.netlify.app'} />
        <ContentTerminalProject title={'JAEG'} subtitle={'Just Another Express Generator'} description={'Generador de servidores Express, realizado en NodeJS'} repository={'https://github.com/martgvr/jaeg'} />
      </div>
    </div>
  )
}

export default ContentTerminal