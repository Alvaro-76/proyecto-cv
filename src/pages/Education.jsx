import {education} from '../data/data-educations.js'
function Education(){

    return(
        <>
        <div>
            <section>
                <div>
                    <h1>Formación Académica</h1>
                </div>
            </section>
            
            <div>
                {education.map((education) => (
                    <section className="resaltado">
                        <h2>{education.title}</h2>
                        <p>{education.institution} | {education.dateStar} - {education.dateEnd}</p>
                    </section>
                ))}
            </div>

        </div>                
        </>
    )
}

export default Education