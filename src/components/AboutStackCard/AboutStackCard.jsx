import './aboutstackcard.css'

export default function AboutStackCard({ icons, title, description }) {
  return (
    <div className='aboutstackcard__container flex-column'>
        <div className='aboutstackcard__icons flex-row'>
            {
                icons.map(icon => <img src={icon} alt="" />)
            }
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}