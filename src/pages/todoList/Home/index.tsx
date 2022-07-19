import { useState } from 'react'
import { Header } from '../../components/Header'
import { ListTask } from '../../components/ListTask'
import { TodoForm } from '../../components/TodoForm'
import { Container, ContainerForm, LayoutContainer } from './styles'

export type typeActionTask = 'default' | 'pending' | 'complete'

export interface ITaskType {
  id: string
  description: string
  action?: typeActionTask | 'default'
}

export function TodoListHome() {
  const [description, setDescription] = useState('')
  const [task, setTask] = useState<ITaskType[]>([])
  const [listTask, setListTask] = useState<ITaskType[]>([])

  function handleAddNewTask() {
    const newTask: ITaskType = {
      id: String(new Date().getTime()),
      description,
      action: 'default',
    }

    setTask((task) => [...task, newTask])
    setListTask((task) => [...task, newTask])
    setDescription('')
  }

  function handleMarkAsDone(id: string) {
    const newArray = listTask.map((task) => {
      if (task.id === id) {
        task.action = 'complete'
        return task
      }
      return task
    })
    setListTask(newArray)
  }

  function handleRemoveTask(id: string) {
    setListTask(listTask.filter((task) => task.id !== id))
  }

  function handleMarkAsPadding(id: string) {
    const newArray = listTask.map((task) => {
      if (task.id === id) {
        task.action = 'default'
        return task
      }
      return task
    })
    setListTask(newArray)
  }

  function handleSearchTask() {
    const result = task.filter(
      (data) => data?.description.indexOf(description) > -1,
    )
    setListTask(result)
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

      <ListTask
        listTask={listTask}
        handleMarkAsDone={handleMarkAsDone}
        handleRemoveTask={handleRemoveTask}
        handleMarkAsPadding={handleMarkAsPadding}
      />
    </Container>
  )
}
