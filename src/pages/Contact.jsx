function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensaje simulando envio");
    };

    return (
        <div className="page">
            <section>
                <h1>Contacto</h1>
                <p>Puedes escribirme para resolver cualquier duda.</p>
            </section>
            
            <div className="contact-form-wrapper">
                <form
                    onSubmit={handleSubmit}
                    className="contact-form"
                    style={{
                        "--rotate": `${Math.random() * 6 - 3}deg`
                    }}
                >
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required placeholder="Escribe tu nombre" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required placeholder="Escribe tu email" />

                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required placeholder="Escribe tu mensaje"></textarea>

                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}

export default Contact;