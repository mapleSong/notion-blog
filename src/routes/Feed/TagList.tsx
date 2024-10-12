import { useRouter } from "next/router"
import React from "react"
import { Emoji } from "src/components/Emoji"
import { useTagsQuery } from "src/hooks/useTagsQuery"

type Props = {}

const TagList: React.FC<Props> = () => {
    const router = useRouter()
    const currentTag = router.query.tag || undefined
    const data = useTagsQuery()

    const handleClickTag = (value: any) => {
        // delete
        if (currentTag === value) {
            router.push({
                query: {
                    ...router.query,
                    tag: undefined,
                },
            })
        }
        // add
        else {
            router.push({
                query: {
                    ...router.query,
                    tag: value,
                },
            })
        }
    }

    return (
        <div className="p-4">
            <div className="hidden lg:block p-1 mb-3">
                <Emoji>🏷️</Emoji> Tags
            </div>
            <div className="flex lg:block mb-6 gap-1 overflow-scroll scrollbar-hide">
                {Object.keys(data).map((key) => (
                    <a
                        key={key}
                        data-active={key === currentTag}
                        onClick={() => handleClickTag(key)}
                        className={`block p-1 px-4 my-1 rounded-lg text-sm leading-5 cursor-pointer flex-shrink-0 ${
                            key === currentTag
                                ? "text-gray-800 bg-gray-200"
                                : "text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        {key}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default TagList
