function ActivitySkeleton() {
    return (
        <div className="animate-pulse space-y-5">

            {[1, 2, 3, 4, 5].map(item => (

                <div
                    key={item}
                    className="flex gap-4 rounded-3xl border border-[#EEF3E3] p-5"
                >

                    <div className="h-12 w-12 rounded-2xl bg-[#EEF3E3]" />

                    <div className="flex-1">

                        <div className="mb-3 h-4 w-40 rounded bg-[#EEF3E3]" />

                        <div className="mb-2 h-3 w-56 rounded bg-[#EEF3E3]" />

                        <div className="h-3 w-24 rounded bg-[#EEF3E3]" />

                    </div>

                </div>

            ))}

        </div>
    );
}

export default ActivitySkeleton;