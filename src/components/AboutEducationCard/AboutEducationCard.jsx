import './abouteducationcard.css'
import Button from "../Button/Button"

export default function AboutEducationCard({ data }) {
    const { month, title, institution, description, certificateURL } = data

    return (
        <div className='abouteducationcard__container flex-column'>
            <div>
                <h2>{month}</h2>
                <h3>{title}</h3>
                <h4>{institution}</h4>
                <p>{description}</p>
            </div>

            <div style={{ alignSelf: 'center' }}>
                <Button text={'Ver certificado'} link={certificateURL} />
            </div>
        </div>
    )
}
