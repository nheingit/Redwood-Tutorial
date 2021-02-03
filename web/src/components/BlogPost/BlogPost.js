import { Link, routes } from '@redwoodjs/router'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const BlogPost = ({ post, summary = false }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl font-semibold text-blue-700">
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <div className="mt-2 font-light text-gray-900">
        {summary ? truncate(post.body, 100) : post.body}
      </div>
    </article>
  )
}

export default BlogPost
