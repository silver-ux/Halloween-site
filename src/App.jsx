import './App.css'
import { Header } from './assets/components/Header'
import { HistoryPage } from './assets/pages/HistoryPage'
import { HomePage } from './assets/pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div>
        <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
