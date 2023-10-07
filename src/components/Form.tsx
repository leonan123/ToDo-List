import { PlusCircle } from 'lucide-react'
import styles from './Form.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useTasks } from '../hooks/useTasks'

export function Form() {
  const { handleFormSubmit } = useTasks()

  const [taskDescription, setTaskDescription] = useState('')

  function handleSubmitNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    handleFormSubmit(taskDescription)
    setTaskDescription('')
  }

  function handleTaskDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskDescription(event.currentTarget.value)
  }

  function handleInvalidInput(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Descrição da tarefa é obrigatória')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmitNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
        required
        onInvalid={handleInvalidInput}
      />
      <button type="submit">
        Criar <PlusCircle />
      </button>
    </form>
  )
}
