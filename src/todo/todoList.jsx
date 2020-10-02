import React from 'react';
import IconButton from '../template/iconButton'

export default props => {

    const denderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td >{todo.description}</td>
                <td>
                <IconButton
                        style="danger"
                        icon="trash-o"
                        onClick={() => props.handleRemove(todo)}
                    />
                </td>
               
            </tr>
        ))
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th> Ações</th>
                </tr>
            </thead>
            <tbody>
                {denderRows()}
            </tbody>
        </table>
    )

}

