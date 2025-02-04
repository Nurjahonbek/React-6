import { useState, useEffect } from "react"
import { Slide, toast } from "react-toastify"
import axios from "axios"

import Loader from "./Loader"

function PostList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  function fetch() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        if (response.status == 200) {
          setPosts(response.data)
          setLoading(false)
        }
      })
      .catch(function (error) {
        toast.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(function () {
    fetch()
  }, [])


  function handle(id) {
    if (window.confirm("ushbu postni ochirasizmi")) {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(function () {
          setPosts(
            posts.filter(function (post) {
              return post.id !== id
            })
          );
          toast.success("muvaffaqiyatli ochrildi", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
        })
        .catch(function () {
          toast.error("postni ochirib bolmadi")
        })
    }
  }

  return (
    <div>
     <h2 className="add">Cardlar</h2>
    <div className="postlist">
      {loading ? (<Loader />) : (
        <ul className="post-list">
       {posts.map(function (post) {
            return (
              <li key={post.id}>{post.title} <br />
                <button onClick={function () {handle(post.id)}}>
                  delete
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
    </div>
  )
}

export default PostList
