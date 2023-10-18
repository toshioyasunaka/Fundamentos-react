export function Post({author, content}) {

  return (
    <section>
      <strong>{author}</strong>
      <p>{content}</p>
    </section>
  )
}