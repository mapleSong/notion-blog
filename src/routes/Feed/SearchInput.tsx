import React, { InputHTMLAttributes } from "react"
import { Emoji } from "src/components/Emoji"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
    return (
        <div className="mb-4 md:mb-8">
            <div className="p-1 mb-3">
                <Emoji>🔎</Emoji> Search
            </div>
            <input
                className="py-2 px-5 rounded-xl outline-none w-full bg-gray-400"
                type="text"
                placeholder="Search Keyword..."
                {...props}
            />
        </div>
    )
}

export default SearchInput
