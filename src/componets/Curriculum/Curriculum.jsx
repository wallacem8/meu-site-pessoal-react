import React from "react";
import "./Curriculum.css";
import data from "./db.json";

function Curriculum() {
    return (
        <>
        <section>
        <h3 className="secoes">Resumo</h3>
        <p>{data.resumo}</p>
    </section>
    <section>
        <h3 className="secoes">Acadêmico</h3>
        <ul>
            {data.experienciaAcademica.map((item, index) => (
                <li key={index}>
                    ({item.dataInicio} - {item.dataFim}) {item.titulo}
                </li>
            ))}
        </ul>
    </section>
    <section>
        <h3 className="secoes">Profissional</h3>
        <ul>
            {data.experienciaProfissinal.map((item, index) => (
                <li key={index}>
                    ({item.dataInicio} - {item.dataFim}) {item.titulo}
                </li>
            ))}
        </ul>
    </section>
    </>
    );
}

export default Curriculum; 