import React, { useState } from "react";
import './Contact.css';


function Contacts() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");


    function enviarFormulario(event) {
        event.preventDefault();
        console.log("Formulário enviado!");
        
        const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

        const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; //Numero de WhatsApp para o qual a mensagem será enviada

        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsApp, '_blank');
    }
    return (
                <form onSubmit={enviarFormulario}>

                    <fieldset>
                        <label htmlFor="input-nome">Nome</label>
                        <input
                            type="text"
                            name="input-nome"
                            id="input-nome"
                            required minLength="2"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="input-email">E-mail</label>
                        <input
                            type="email"
                            name="input-email"
                            id="input-email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="input-tel">Telefone</label>
                        <input
                            type="tel"
                            name="input-tel"
                            id="input-tel"
                            placeholder="(00) 00000-0000"
                            required pattern="^\(\d{2}\) \d{5}-\d{4}$"
                            maxLength="15"
                            value={telefone}
                            onChange={(event) => setTelefone(event.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="input-msg">Mensagem</label>
                        <textarea
                            name="input-msg"
                            id="input-msg"
                            cols="30"
                            rows="10"
                            value={mensagem}
                            onChange={(event) => setMensagem(event.target.value)}
                        >
                        </textarea>
                    </fieldset>

                    <center>
                        <input type="submit" value="ENVIAR" className="button" />
                    </center>

                </form>

    );
}

export default Contacts;