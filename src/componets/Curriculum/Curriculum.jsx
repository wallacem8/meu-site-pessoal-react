import React from "react";
import "./Curriculum.css";


function Curriculum(props) {
    const { resumo, experienciaAcademica, experienciaProfissinal } = props.curriculum;

    if (!resumo || !experienciaAcademica || !experienciaProfissinal) {
        return <p>Carregando...</p>
    }

    return (
        <>
            <section>
                <h3 className="secoes">Resumo</h3>
                <p>{resumo}</p>
            </section>
            <section>
                <h3 className="secoes">Acadêmico</h3>
                <ul>
                    {experienciaAcademica.map((item, index) => (
                        <li key={index}>
                            ({item.dataInicio} - {item.dataFim}) {item.titulo}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h3 className="secoes">Profissional</h3>
                <ul>
                    {experienciaProfissinal.map((item, index) => (
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