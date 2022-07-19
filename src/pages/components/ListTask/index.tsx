import { Container, Button } from './styles'
import { ITaskType } from '../../todoList/Home'
import { ArrowCounterClockwise, Check, Trash } from 'phosphor-react'

interface IListTaskProps {
  listTask: ITaskType[]
  handleMarkAsDone: (id: any) => void
  handleMarkAsPadding: (id: any) => void
  handleRemoveTask: (id: any) => void
}

export function ListTask({
  listTask,
  handleMarkAsDone,
  handleMarkAsPadding,
  handleRemoveTask,
}: IListTaskProps) {
  const tasks = listTask || []

  const tbody = tasks.map((task: ITaskType) => {
    return (
      <tr key={task?.id}>
        <td className="description" id={task.action}>
          {task?.description}
        </td>
        <td>
          <Button
            statusColor="success"
            onClick={() => handleMarkAsDone(task.id)}
          >
            <Check size={30} />
          </Button>
          <Button
            statusColor={task.action !== 'complete' ? 'disabled' : 'warning'}
            onClick={() => handleMarkAsPadding(task.id)}
          >
            <ArrowCounterClockwise size={30} />
          </Button>
          <Button
            statusColor="danger"
            onClick={() => handleRemoveTask(task.id)}
          >
            <Trash size={30} />
          </Button>
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
