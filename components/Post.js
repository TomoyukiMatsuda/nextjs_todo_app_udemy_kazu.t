export default function Post({ post }) {
  return (
    <div>
      <span>{post.id}</span>
      {"："}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
          {post.title}
        </span>
      </Link>
    </div>
  )
}