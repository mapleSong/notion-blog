import PostCard from "src/routes/Feed/PostList/PostCard"
import React, { useMemo } from "react"
import usePostsQuery from "src/hooks/usePostsQuery"
import { filterPosts } from "./filterPosts"
import { DEFAULT_CATEGORY } from "src/constants"

type Props = {
    q: string
}

const PinnedPosts: React.FC<Props> = ({ q }) => {
    const data = usePostsQuery()

    const filteredPosts = useMemo(() => {
        const baseFiltered = filterPosts({
            posts: data,
            q,
            category: DEFAULT_CATEGORY,
            order: "desc",
        })
        return baseFiltered.filter((post) => post.tags?.includes("Pinned"))
    }, [data, q])

    if (filteredPosts.length === 0) return null

    return (
        <div className="relative">
            <div className="flex justify-between items-center mb-4 border-b border-gray-300">
                <div className="flex items-center mt-2 mb-2 gap-1 text-xl font-bold cursor-pointer">
                    📌 Pinned Posts
                </div>
            </div>
            <div className="my-2">
                {filteredPosts.map((post) => (
                    <PostCard key={post.slug} data={post} />
                ))}
            </div>
        </div>
    )
}

export default PinnedPosts
