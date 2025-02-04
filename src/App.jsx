
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PostList from './assets/components/PostList'
import AddPost from './assets/components/AddPost'
import Navbar from './assets/components/Navber'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
