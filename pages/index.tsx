import type { NextPage } from 'next'
import useLocalStorage from '../hooks/use-local-storage'

const Home: NextPage = () => {
  const [count, setCount] = useLocalStorage('count', 1)
  return (
    <div style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>{count}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => setCount(count + 1)}>⬆️</button>
        <button onClick={() => setCount(count - 1)}>⬇️</button>
        <button onClick={() => setCount(0)}>🔄</button>
      </div>
    </div>
  )
}

export default Home
