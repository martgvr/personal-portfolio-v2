import React from 'react'
import './contentterminal.css'

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
        <div className='terminal__projects--box flex-column'>
          <h2>KAAMS STYLE</h2>
          <h3>Desarrollo para el emprendimiento New Kaam's Style</h3>
          <p>E-commerce desarrollado en ReactJS y Firebase como DB</p>
        </div>

        <div className='terminal__projects--box flex-column'>
          <h2>TRIGORINAS</h2>
          <h3>Desarrollo para el emprendimiento Trigorinas</h3>
          <p>Landing page realizada en ReactJS con Firebase</p>
        </div>

        <div className='terminal__projects--box flex-column'>
          <h2>BOOST</h2>
          <h3>Desarrollo para el emprendimiento Boost</h3>
          <p>Landing page realizada en ReactJS</p>
        </div>
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
        <div className='terminal__projects--box flex-column'>
          <h2>P_Final Backend</h2>
          <h3>Proyecto final del curso de backend de Coderhouse</h3>
          <p>Servidor Express desarrollado en NodeJS</p>
        </div>

        <div className='terminal__projects--box flex-column'>
          <h2>P_Final JS</h2>
          <h3>Proyecto final del curso de Javascript de Coderhouse</h3>
          <p>Tracker de operaciones de criptomonedas realizado en Javascript</p>
        </div>

        <div className='terminal__projects--box flex-column'>
          <h2>JAEG</h2>
          <h3>Just Another Express Generator</h3>
          <p>Generador de servidores Express, realizado en NodeJS</p>
        </div>
      </div>
    </div>
  )
}

export default ContentTerminal