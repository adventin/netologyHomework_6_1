import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import ClockList from './components/ClockList'


function App() {

  const [form, setForm] = useState({
    name: '',
    timezone: '',
  });
  const [clockList, setClockList] = useState([]);

  return (
    <div className="App">
      <Form form={form} setForm={setForm} clockList={clockList} setClockList={setClockList} />
      <ClockList clockList={clockList} setClockList={setClockList} />
    </div>
  )
}

export default App
