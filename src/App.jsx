import { Header } from './components/Header'
import { Ex1 } from './components/Exemplo1'
import { Ex2 } from './components/Exemplo2'

export function App() {
  return(
    <>
      <Header />

      <main>
        <Ex1 />
        <Ex2 />
      </main>
    </>
  )
}