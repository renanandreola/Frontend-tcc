import React from 'react';
import alunos from '../../data/alunos'

export default (props) => {
    const listAlunos = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                ({aluno.id}) {aluno.nome} - Nota: {aluno.nota}
            </li>
        ) 
    })
    
    return(
        <div>
            <ul style={{listStyle: 'none'}}>
                {listAlunos}
            </ul>
        </div>
    )
}