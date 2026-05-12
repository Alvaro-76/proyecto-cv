function Contact(){
    return(
        <div className="page">
            <h1>Contacto</h1>
            <p>Puedes escribime para resolver cualquier duda.</p>

            <div className="contact-form-wrapper">
                <form action="#" method="post" encType="text/plain" className="contact-form" style={{
                            "--rotate": `${Math.random() * 6 - 3}deg`
                        }}
                        >
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name" required placeholder="Escribe tu nombre"  />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required placeholder="Escribe tu email" />

                    <label for="message">Mensaje:</label>   
                    <textarea id="message" name="message" required placeholder="Escribe tu mensaje"></textarea>

                    <input type="submit" value="Enviar" />
                </form> 
            </div>

        </div>
    )
}

export default Contact