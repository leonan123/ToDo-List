import { createContext, useEffect, useState } from 'react'
import { TaskType } from '../components/Tasks'
import { v4 as uuidV4 } from 'uuid'

interface TaskContextProps {
  tasks: TaskType[]
  handleFormSubmit: (taskDescription: string) => void
  setTasksAsConcluded: (id: string) => void
  deleteTask: (id: string) => void
}

export const TaskContext = createContext({} as TaskContextProps)

interface TaskProviderProps {
  children: React.ReactNode
}
export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function handleFormSubmit(taskDescription: string) {
    setTasks((prevState) => {
      const newTasks = [
        ...prevState,
        {
          id: uuidV4(),
          description: taskDescription,
          concluded: false,
        },
      ]

      localStorage.setItem('tasks', JSON.stringify(newTasks))

      return newTasks
    })
  }

  function setTasksAsConcluded(id: string) {
    setTasks((prevState) => {
      const newTasks = prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            concluded: !task.concluded,
          }
        }
        return task
      })

      localStorage.setItem('tasks', JSON.stringify(newTasks))

      return newTasks
    })
  }

  function deleteTask(id: string) {
    setTasks((prevState) => {
      const newTasks = prevState.filter((task) => task.id !== id)

      localStorage.setItem('tasks', JSON.stringify(newTasks))

      return newTasks
    })
  }

  useEffect(() => {
    const tasksStorage = localStorage.getItem('tasks')
    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage))
    }
  }, [])
  return (
    <TaskContext.Provider
      value={{ tasks, handleFormSubmit, setTasksAsConcluded, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}
