import './ListActions.css'
import React from 'react';
import actions from '../../../data/actionsB3'

export default (porps) => {
    return (
        <>
        <h1>Ações cadastradas na B3</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {actions.map(action => (
                        <tr key={action.code}>
                            <th scope="row">-</th>
                            <td>{action.code}</td>
                            <td>{action.name}</td>
                            <td><a href='/'>Ver ativo</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}