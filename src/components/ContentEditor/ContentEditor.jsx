import React from "react"
import "./contenteditor.css"

function ContentEditor() {
	return (
		<div className="contenteditor__container flex-column" id="contentEditor">
			<div className="editor__titlebar flex-row">
				<div className="editor__titlebar--leftside flex-row">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="" />
					<img src="https://cdn1.iconfinder.com/data/icons/thin-ui-1/100/Noun_Project_100Icon_1px_grid_thin_ic_menu-512.png" alt="" />
				</div>
        <div className="editor__titlebar--rightside flex-row">
          <img src="minimize.png" alt="" />
          <img src="maximize.png" alt="" />
          <img src="close.png" alt="" />
        </div>
			</div>

      <div className="editor__filebar">
        <div className="editor__filebar--current flex-row">
          <div className="flex-row">
            <img src="json.png" alt="" />
            <p>whoami.json</p>
          </div>
        </div>
      </div>

      <div className="editor__text flex-column">
        <div className="flex-row">
          <div className="line__number">1</div>
          <div className="line__content">{`{`}</div>
        </div>

        <div className="flex-row">
          <div className="line__number">2</div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__yellow">"nombre"</p><p className="line__symbol">:</p>
            <p className="line__green">"Martín Guevara"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">3</div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__yellow">"cargo"</p><p className="line__symbol">:</p>
            <p className="line__green">"Desarrollador Full Stack"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">4</div>
          <div className="line__content"></div>
        </div>

        <div className="flex-row">
          <div className="line__number">5</div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__yellow">"estudios"</p>
            <p className="line__symbol">:</p><p className="line__blue">[</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">6</div>
          <div className="line__indent"></div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__green">"Tec. Sup Informática (en progreso) - UTN"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">7</div>
          <div className="line__indent"></div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__green">"Desarrollo Full Stack - Coderhouse"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">8</div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__blue">]</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">9</div>
          <div className="line__content"></div>
        </div>

        <div className="flex-row">
          <div className="line__number">10</div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__yellow">"stack_principal"</p>
            <p className="line__symbol">:</p><p className="line__blue">[</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">11</div>
          <div className="line__indent"></div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__green">"MongoDB"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">12</div>
          <div className="line__indent"></div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__green">"Express"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">13</div>
          <div className="line__indent"></div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__green">"React"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">14</div>
          <div className="line__indent"></div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__green">"Node"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">15</div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__blue">]</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">16</div>
          <div className="line__content"></div>
        </div>

        <div className="flex-row">
          <div className="line__number">17</div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__yellow">"otras_tecnologias"</p>
            <p className="line__symbol">:</p><p className="line__blue">[</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">18</div>
          <div className="line__indent"></div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__green">"C"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">19</div>
          <div className="line__indent"></div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__green">"DenoJS"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">20</div>
          <div className="line__indent"></div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__green">"Typescript"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">21</div>
          <div className="line__indent"></div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__green">"React Native"</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">22</div>
          <div className="line__indent"></div>
          <div className="line__content flex-row">
            <p className="line__blue">]</p><p className="line__symbol">,</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="line__number">23</div>
          <div className="line__content">{`}`}</div>
        </div>
      </div>

      

		</div>
	)
}

export default ContentEditor
