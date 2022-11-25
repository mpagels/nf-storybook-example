import ToDo from './components/ToDo/ToDo'

function App() {
  return (
    <div>
      <ToDo text="hello world" completed={false} />
      <ToDo text="hello world" completed={true} />
    </div>
  )
}

export default App
