import styles from './App.module.css'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { TaskProvider } from './context/TaskContext'

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <TaskProvider>
            <Form />
            <Tasks />
          </TaskProvider>
        </main>
      </div>
    </>
  )
}

export default App
