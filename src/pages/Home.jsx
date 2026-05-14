// pages/Home.jsx
import { about } from "../data/data-about.js"

function Home() {
  return (
    <div>
      <section className="resaltado">
        <h1>{about.name}</h1>
        <p>{about.email} | Fecha Nacimiento: {about.date} | {about.address}</p>
      </section>

      <section>
        <h2>Sobre mí</h2>
        <p>{about.description}</p>
      </section>
      
      <section className="links-section">
        <h2>Enlaces</h2>
        <p>
          <a href={about.itchio} target="_blank" rel="noopener noreferrer">
            {about.itchio}
          </a>
        </p>
        <p>
          <a href={about.github} target="_blank" rel="noopener noreferrer">
            {about.github}
          </a>
        </p>
        <p>
          <a href={about.blog} target="_blank" rel="noopener noreferrer">
            {about.blog}
          </a>
        </p>
        <p>
          <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
            {about.linkedin}
          </a>
        </p>
      </section>
    </div>
  )
}

export default Home