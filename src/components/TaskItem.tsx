import styles from './TaskItem.module.css'
import { Check, Trash2 } from 'lucide-react'
import { TaskType } from './Tasks'
import { useTasks } from '../hooks/useTasks'

interface TaskItemProps {
  task: TaskType
}
export function TaskItem({ task }: TaskItemProps) {
  const { setTasksAsConcluded, deleteTask } = useTasks()
  function handleTaskConcluded() {
    setTasksAsConcluded(task.id)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <>
      <li className={styles.taskItem}>
        <div>
          <label className={styles.taskCheckbox} tabIndex={0}>
            <Check width={14} height={14} />
            <div className={styles.hiddenCheckbox}>
              <input
                type="checkbox"
                className="checkbox"
                name="checkTask"
                defaultChecked={task.concluded}
                onChange={handleTaskConcluded}
              />
            </div>
          </label>
        </div>
        <div
          className={
            task.concluded
              ? styles.taskDescriptionConcluded
              : styles.taskDescription
          }
        >
          <p>{task.description}</p>
        </div>
        <div className={styles.taskDelete}>
          <button type="button" onClick={handleDeleteTask}>
            <Trash2 />
          </button>
        </div>
      </li>
    </>
  )
}
