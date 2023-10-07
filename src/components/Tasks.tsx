import { TaskItem } from './TaskItem'
import styles from './Tasks.module.css'
import { useTasks } from '../hooks/useTasks'

export interface TaskType {
  id: string
  description: string
  concluded: boolean
}

export function Tasks() {
  const { tasks } = useTasks()

  const totalTasks = tasks.length
  const concludedTask = tasks.filter((task) => task.concluded === true).length

  return (
    <section className={styles.taskListContainer}>
      <header>
        <div className={styles.taskCreated}>
          Tarefas Criadas <span>{totalTasks}</span>
        </div>
        <div className={styles.taskConcluded}>
          Concluídas{' '}
          <span>
            {concludedTask} de {totalTasks}
          </span>
        </div>
      </header>
      <main>
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </main>
    </section>
  )
}
