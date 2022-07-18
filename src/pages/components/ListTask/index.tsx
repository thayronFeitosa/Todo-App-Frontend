import { Container } from './styles'
import { ITaskType } from '../../todoList/Home'

interface IListTaskProps {
  listTask: ITaskType[]
  handleMarkAsDone: (id: any) => void
  handleMarkAsPadding?: () => void
  handleRemoveTask?: () => void
}

export function ListTask({
  listTask,
  handleMarkAsDone,
  handleMarkAsPadding,
  handleRemoveTask,
}: IListTaskProps) {
  const tasks = listTask || []

  const tbody = tasks.map((data: ITaskType) => {
    return (
      <tr key={data?.id}>
        <td className="description">{data?.description}</td>
        <td>
          <button onClick={() => handleMarkAsDone(data.id)}>Concluir</button>
          <button onClick={handleMarkAsPadding}>Pendente</button>
          <button onClick={handleRemoveTask}>Remover</button>
        </td>
      </tr>
    )
  })

  return (
    <Container>
      <table>
        <thead>
          <tr className="thead">
            <th>Descrição</th>
            <th> Ações</th>
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </Container>
  )
}
