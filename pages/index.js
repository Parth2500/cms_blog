import Head from 'next/head'

const posts = [
  { title: 'First post', excerpt: 'Learn React'},
  { title: 'Second post', excerpt: 'Learn Tailwind'}
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-100">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = 'grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
     
    </div>
  )
}
