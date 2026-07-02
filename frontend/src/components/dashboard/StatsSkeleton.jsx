function StatsSkeleton() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 animate-pulse">

      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="
            rounded-3xl
            border
            border-[#EEF3E3]
            bg-white
            p-5
          "
        >
          <div className="h-4 w-24 rounded bg-[#EEF3E3]" />

          <div className="mt-4 h-8 w-16 rounded bg-[#EEF3E3]" />

          <div className="mt-3 h-3 w-20 rounded bg-[#EEF3E3]" />
        </div>
      ))}

    </div>
  );
}

export default StatsSkeleton;