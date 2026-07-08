function ActivitySkeleton() {

    return (

        <div className="space-y-4 animate-pulse">

            {Array.from({ length: 6 }).map((_, index) => (

                <div

                    key={index}

                    className="
                        flex
                        items-start
                        gap-3

                        rounded-2xl

                        border
                        border-[#EEF3E3]

                        bg-white

                        p-4

                        shadow-sm
                    "

                >

                    <div
                        className="
                            h-10
                            w-10

                            shrink-0

                            rounded-xl

                            bg-[#EEF3E3]
                        "
                    />

                    <div className="flex-1">

                        <div
                            className="
                                h-4
                                w-36

                                rounded-full

                                bg-[#EEF3E3]
                            "
                        />

                        <div
                            className="
                                mt-2

                                h-3
                                w-44

                                rounded-full

                                bg-[#EEF3E3]
                            "
                        />

                        <div
                            className="
                                mt-3

                                h-2.5
                                w-20

                                rounded-full

                                bg-[#EEF3E3]
                            "
                        />

                    </div>

                </div>

            ))}

        </div>

    );

}

export default ActivitySkeleton;