import { experience } from '../data/data-experience'

function Experience(){
    return(
        <div> 
            <section>
                <h1>Experiencia Laboral</h1>
            </section>

            <div>
                {experience.map((experience) => (
                    <section className="resaltado">
                        <h2>{experience.title}</h2>
                        <p>{experience.company} | {experience.dateStar} - {experience.dateEnd}</p>
                        <ul>
                            {experience.responsibilities.map((responsibility) => <li>{responsibility}</li>)}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Experience