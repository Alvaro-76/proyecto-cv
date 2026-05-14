import { skills } from "../data/data-skills.js";

function Skills() {

    const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(skill);

        return acc;
    }, {});


    return (
        <div>
            <section>
                <h1>Habilidades técnicas</h1>
                <p>He trabajado y desarrollado proyectos usando estas tecnologías</p>
            </section>
            
            <div className="skills-grid">
            {Object.entries(groupedSkills).map(([category, skills]) => (
                <div key={category} className="skill-category">
                <h2>{category}</h2>
                <div className="skills">
                    {skills.map((skill) => (
                    <span
                        key={skill.id}
                        className="skill-tag"
                        style={{ "--r": `${Math.random() * 6 - 3}deg` }}
                    >
                        {skill.name}
                    </span>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
    );
}   

export default Skills