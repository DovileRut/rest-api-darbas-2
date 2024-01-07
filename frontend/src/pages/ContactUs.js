
const ContactUs = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Jūsų žinutė nusiųsta!")
        window.location.href = '/'
    }
    
    return (
        <div className="contact-us">
            <h2>Susisiekite su mumis</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Vardas"
                    name="name"
                    required
                />
                <input
                    type="email"
                    placeholder="El. paštas"
                    name="email"
                    required
                />
                <textarea
                    placeholder="Jūsų žinutė"
                    name="message"
                    required
                    ></textarea>
                    <button type="submit">Siųsti</button>
            </form>
        </div>
    )
}

export default ContactUs