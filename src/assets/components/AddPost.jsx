import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddPost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  function handle(e) {
    e.preventDefault()

    if (!(title || body)) {
      toast.error('barcha maydonlarni toldiring')
      return
    }

    axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
      .then(function () {
        toast.success('muvaffaqiyatli qoshildi')
        navigate('/')
      })
      .catch(function () {
        toast.error(error)
      })
  }

  return (
    <div>
      <h2 className='add'>yangi qoshish</h2>
      <form onSubmit={handle}>
        <input type="text" placeholder="Enter text..." value={title}
          onChange={function (e) { setTitle(e.target.value) }}/>
        <textarea placeholder="izoh..." value={body}
          onChange={function (e) { setBody(e.target.value) }}></textarea>
        <button type="submit">qoshish</button>
      </form>
    </div>
  )
}

export default AddPost
