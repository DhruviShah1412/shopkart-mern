import React, { useEffect, useState } from 'react'

const Blog = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
        .then(response => response.json())
        .then(json => {
            setPost(json.posts)
        })
        .catch(error => console.log(error))
    })

  return (
    <>
        <div className="container">
            <div className="row">
                {
                    post.map((data) => {
                        return(
                            <>
                                <div className="col-lg-3">
                                    <h1>{data.title}</h1>
                                <p>{data.body}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Blog