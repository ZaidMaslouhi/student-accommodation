import { getPostBySlug } from "@/lib/wordpress";
import { Section, Container, Article } from "@/components/craft";
import BackButton from "@/components/back";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <Article>
      <Section>
        <Container>
          <BackButton />
          <h1 className="pt-12">{post.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Container>
      </Section>
    </Article>
  );
}
