import { allBlogs } from ".contentlayer/data"
import { videos } from "@/lib/videos"
import { ContentLink } from "@/ui/ContentLink"
import { Layout } from "@/ui/Layout"
import { Navigation } from "@/ui/Navigation"
import { ProfileImage } from "@/ui/ProfileImage"
import YoutubeIcon from "@/ui/YoutubeIcon"
import AnnotationIcon from "@heroicons/react/solid/AnnotationIcon"
import VideoCameraIcon from "@heroicons/react/solid/VideoCameraIcon"
import { pick } from "contentlayer/client"
import type { InferGetStaticPropsType } from "next"
import Link from "next/link"
import React from "react"
import { useIntersection } from "react-use"

export const getStaticProps = async () => {
  const posts = allBlogs
    .map((post) =>
      pick(post, [
        "slug",
        "title",
        "description",
        "publishedAt",
        "publishedAtFormatted",
      ]),
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    )

  return { props: { posts } }
}

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
  })

  let showNav = false
  if (intersection && !intersection.isIntersecting) {
    showNav = true
  }

  return (
    <Layout showNav={showNav}>
      <div className="-mt-12 space-y-20 sm:mt-0 sm:space-y-32">
        <div ref={intersectionRef}>
          <div className="space-y-8 sm:space-y-12">
            <div className="flex items-center space-x-6">
              <ProfileImage size="large" />

              <div>
                <h1 className="text-4xl font-medium text-rose-50/80">Delba</h1>
                <h2 className="text-lg text-rose-100/60">
                  Developer Advocate at Vercel
                </h2>
              </div>
            </div>

            <p className="text-xl text-rose-50/80">
              Welcome to my digital garden where I share what I'm learning about
              shipping great products, becoming a better developer and growing a
              career in tech.
            </p>

            <Navigation />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between space-x-4">
            <a
              href="https://youtube.com/playlist?list=PLo9a4XFa98CBynQ0HE_UstByk_-KXg6eU"
              className="flex items-center space-x-4 group"
              title="Youtube playlist"
            >
              <div className="p-2 rounded-2xl shadow-surface-elevation-low transition duration-300 bg-white/[5%] group-hover:bg-white/[7%] group-hover:shadow-surface-elevation-medium">
                <VideoCameraIcon className="w-6 transition-colors text-rose-100/20 group-hover:text-rose-100/40" />
              </div>

              <div>
                <h2 className="text-2xl transition-colors text-rose-100/40 group-hover:text-rose-100/80">
                  Videos
                </h2>
              </div>
            </a>

            <a
              href="https://youtube.com/playlist?list=PLo9a4XFa98CBynQ0HE_UstByk_-KXg6eU"
              className="flex items-center space-x-2 group"
            >
              <h2 className="text-lg transition-colors text-rose-100/40 group-hover:text-rose-100/80">
                Playlist
              </h2>

              <YoutubeIcon className="w-5 transition-colors shadow-md text-rose-100/20 group-hover:text-red-500/70" />
            </a>
          </div>

          <div className="mt-12 space-y-10">
            {videos.map((post) => (
              <ContentLink
                key={post.url}
                title={post.title}
                text={post.description}
                href={post.url}
                meta={[post.category, post.date]}
                Icon={YoutubeIcon}
              />
            ))}
          </div>
        </div>

        <div>
          <Link href="/blog">
            <a className="flex items-center space-x-4 group">
              <div className="p-2 rounded-2xl shadow-surface-elevation-low transition duration-300 bg-white/[5%] group-hover:bg-white/[7%] group-hover:shadow-surface-elevation-medium">
                <AnnotationIcon className="w-6 transition-colors text-rose-100/20 group-hover:text-rose-100/40" />
              </div>

              <div>
                <h2 className="text-2xl transition-colors text-rose-100/40 group-hover:text-rose-100/80">
                  Posts
                </h2>
              </div>
            </a>
          </Link>

          <div className="mt-12 space-y-10">
            {posts.map((post) => (
              <ContentLink
                key={post.slug}
                title={post.title}
                text={post.description}
                href={`/blog/${post.slug}`}
                meta={[post.publishedAtFormatted]}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
