function RecentOrdersSkeleton() {
  return (
    <div className="mt-8">

      <div className="mt-10 mb-5 flex items-center justify-between">

        <div className="h-8 w-44 rounded bg-[#EEF3E3] animate-pulse" />

        <div className="h-5 w-16 rounded bg-[#EEF3E3] animate-pulse" />

      </div>

      <div className="space-y-4">

        {[1, 2, 3].map((item) => (

          <div
            key={item}
            className="
              animate-pulse

              rounded-[26px]

              border
              border-[#EEF3E3]

              bg-white

              p-5
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex gap-3">

                <div className="h-12 w-12 rounded-2xl bg-[#EEF3E3]" />

                <div>

                  <div className="h-4 w-32 rounded bg-[#EEF3E3]" />

                  <div className="mt-3 h-3 w-24 rounded bg-[#EEF3E3]" />

                </div>

              </div>

              <div className="h-6 w-16 rounded-full bg-[#EEF3E3]" />

            </div>

            <div className="mt-5 h-2 w-full rounded-full bg-[#EEF3E3]" />

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentOrdersSkeleton;