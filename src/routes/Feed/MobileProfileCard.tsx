import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"

type Props = {
    className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
    return (
        <div className="block lg:hidden">
            <div className="p-1 mb-3">💻 Profile</div>
            <div className="p-2 mb-4 rounded-xl bg-white dark:bg-gray-800">
                <div className="flex gap-2 items-center">
                    <Image
                        src={CONFIG.profile.image}
                        width={90}
                        height={90}
                        className="relative"
                        alt="profile_image"
                    />
                    <div className="flex flex-col">
                        <div className="text-xl leading-7 italic font-bold">{CONFIG.profile.name}</div>
                        <div className="mb-2 text-sm leading-5 text-gray-600 dark:text-gray-400">{CONFIG.profile.role}</div>
                        <div className="text-sm leading-5">{CONFIG.profile.bio}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileProfileCard
