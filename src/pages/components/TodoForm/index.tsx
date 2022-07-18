import { MagnifyingGlass, Plus } from 'phosphor-react'
import { Button, Container, Input } from './styles'

interface ITodoFormProps {
  handleAddNewTask: () => void
  handleSearchTask: () => void
  handleChangeInput: (e: any) => void
  description: string
}

export function TodoForm({
  handleAddNewTask,
  handleSearchTask,
  handleChangeInput,
  description,
}: ITodoFormProps) {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Adicione uma tarefa"
        onChange={handleChangeInput}
        value={description}
      />
      <Button colorButton="#286090" onClick={handleAddNewTask}>
        <Plus />
      </Button>
      <Button colorButton="#31B0D5" onClick={handleSearchTask}>
        <MagnifyingGlass />
      </Button>
    </Container>
  )
}
