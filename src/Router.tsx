import { Routes, Route } from 'react-router-dom'
import { DefaultHome } from './pages/todoList/layouts/DefaultHome'
import { TodoListHome } from './pages/todoList/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultHome />}>
        <Route path="/todo-list" element={<TodoListHome />} />
      </Route>
    </Routes>
  )
}
