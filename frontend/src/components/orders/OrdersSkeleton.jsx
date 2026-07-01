function OrdersSkeleton() {
    return (
        <div className="mt-6 animate-pulse">

            {/* Search Bar */}

            <div className="mb-6 h-14 rounded-2xl bg-[#F3F6EA]" />

            {/* Filter Tabs */}

            <div className="mb-7 flex gap-3">

                <div className="h-11 flex-1 rounded-2xl bg-[#F3F6EA]" />

                <div className="h-11 flex-1 rounded-2xl bg-[#F3F6EA]" />

                <div className="h-11 flex-1 rounded-2xl bg-[#F3F6EA]" />

            </div>

            {/* Order Cards */}

            {[1, 2, 3].map((item) => (

                <div
                    key={item}
                    className="
                        mb-5

                        rounded-3xl

                        border
                        border-[#EEF3E3]

                        bg-white

                        p-5
                    "
                >

                    <div className="flex items-start justify-between">

                        <div className="flex gap-4">

                            <div className="h-12 w-12 rounded-2xl bg-[#F3F6EA]" />

                            <div>

                                <div className="mb-2 h-5 w-36 rounded bg-[#F3F6EA]" />

                                <div className="h-4 w-24 rounded bg-[#F3F6EA]" />

                            </div>

                        </div>

                        <div className="h-7 w-20 rounded-full bg-[#F3F6EA]" />

                    </div>

                    <div className="mt-6">

                        <div className="mb-2 flex justify-between">

                            <div className="h-3 w-16 rounded bg-[#F3F6EA]" />

                            <div className="h-3 w-10 rounded bg-[#F3F6EA]" />

                        </div>

                        <div className="h-2 rounded-full bg-[#F3F6EA]" />

                    </div>

                    <div className="mt-5 flex items-center justify-between">

                        <div className="h-7 w-24 rounded-full bg-[#F3F6EA]" />

                        <div className="h-4 w-20 rounded bg-[#F3F6EA]" />

                    </div>

                </div>

            ))}

        </div>
    );
}

export default OrdersSkeleton;