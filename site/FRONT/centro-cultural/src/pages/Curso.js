import React from 'react';
import Card from '../components/card/Card'
import "../styles/detalleCurso.css"

const Curso = () => {
    return (
        <>

            <section className='cursoTaller'>
                <div className='title-cursoTaller'>
                    Curso/Taller
                </div>

                <Card/>

                <button>
                    Inscribirme
                </button>

                <p>
                    Agregar componente descripción
                </p>

                <button>
                    Inscribirme
                </button>

            </section>
        </>
    );
};

export default Curso;