import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import NextLink from 'next/link';
import { PostArticle, PostBody, PostContainer, PostFooter } from './postlayout.styles';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

export const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <PostArticle>
      <PostContainer>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
      <PostBody dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </PostContainer>
      <PostFooter>
        <h3>¿Quieres que te ayudemos a escalar las ventas de tu negocio?</h3>
        <p>Contacta con nosotros a través de este <NextLink href={'/?goto=contacto'}>link</NextLink> o utilizando el botón de whats app que tienes abajo a la derecha. Somos expertos en SEO, SEM, Local SEO, Growth Partner y en creación de webs. Te garantizamos los resultados cobrando a modo de suscripción que puedes parar cuando tú quieras. No lo dudes más y ponte en contacto para saber los siguientes pasos a seguir.</p>
      </PostFooter>
    </PostArticle>
  )
}