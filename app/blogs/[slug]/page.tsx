import { getPostData, getSortedPostsData } from '../../../lib/posts'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map(({ slug }) => ({ slug }))
}

export default async function PostPage({ params }: Props) {
  const postData = await getPostData(params.slug)

  return (
    <article style={{ padding: '2rem' }}>
      <h1>{postData.title}</h1>
      <div style={{ color: '#666', marginBottom: '1rem' }}>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}
