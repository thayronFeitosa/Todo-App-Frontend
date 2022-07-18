import { useState } from 'react'
import { Header } from '../../components/Header'
import { ListTask } from '../../components/ListTask'
import { TodoForm } from '../../components/TodoForm'
import { Container, ContainerForm, LayoutContainer } from './styles'

export interface ITaskType {
  id: string
  description: string
}

export function TodoListHome() {
  const [description, setDescription] = useState('')
  const [task, setTask] = useState<ITaskType[]>([])
  const [listTask, setListTask] = useState<ITaskType[]>([])

  function handleAddNewTask() {
    const newTask: ITaskType = {
      id: String(new Date().getTime()),
      description,
    }

    setTask((task) => [...task, newTask])
    setListTask((task) => [...task, newTask])
    setDescription('')
  }

  function handleMarkAsDone(task: string) {
    console.log('Done', task)
  }

  function handleSearchTask() {
    const result = task.filter(
      (data) => data?.description.indexOf(description) > -1,
    )
    setListTask(result)

    console.log(result)
  }

  function handleChangeInput(e: any) {
    setDescription(e.target.value)
    console.log(e.target.value)
  }

  return (
    <Container>
      <LayoutContainer>
        <Header />
      </LayoutContainer>
      <h1>Hello word</h1>

      <ContainerForm>
        <TodoForm
          handleAddNewTask={handleAddNewTask}
          handleSearchTask={handleSearchTask}
          description={description}
          handleChangeInput={handleChangeInput}
        />
      </ContainerForm>

      <ListTask listTask={listTask} handleMarkAsDone={handleMarkAsDone} />
    </Container>
  )
}
