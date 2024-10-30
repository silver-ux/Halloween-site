import './App.css'
import { Header } from './assets/components/Header'
import { ScrollTop } from './assets/components/ScrollTop'
import { HistoryPage } from './assets/pages/HistoryPage'
import { HomePage } from './assets/pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MythologyPage } from './assets/pages/MythologyPage'
import { Monsters } from './assets/pages/Monsters'

function App() {

  return (
    <Router>
      <div>
        <ScrollTop />
        <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path='/mythology' element={<MythologyPage />} />
        <Route path='/monster' element={<Monsters />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
