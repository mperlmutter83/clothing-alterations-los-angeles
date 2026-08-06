import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, toRenderPost } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog — Tailoring & Alterations Tips",
  description:
    "Tips and guides on clothing alterations, tailoring, garment fit and clothing care from Clothing Alterations Los Angeles.",
};

export const revalidate = 60;

const SITE_DOMAIN = "clothingalterationslosangeles.com";

export default async function BlogPage() {
  const apiPosts = await getPosts(SITE_DOMAIN);
  const posts = apiPosts.map(toRenderPost);

  return (
    <>
      <section className="bg-charcoal text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl mb-4">
          Tailoring &amp; Alterations Blog
        </h1>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          Fit guides, garment care tips and alteration know-how from our
          Valley Village tailoring studio.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl mb-3">Articles Coming Soon</h2>
              <p className="text-neutral-600 max-w-md mx-auto">
                We&apos;re stitching together helpful guides on alterations
                and garment care. Check back soon — or call us at{" "}
                <a
                  href="tel:+13109612888"
                  className="text-gold font-semibold"
                >
                  (310) 961-2888
                </a>{" "}
                with any questions.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-200"
                >
                  {post.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <p className="text-xs text-gold uppercase tracking-wider mb-2">
                      {post.category}
                    </p>
                    <h2 className="text-xl mb-2">{post.title}</h2>
                    <p className="text-sm text-neutral-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-neutral-400 mt-4">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
