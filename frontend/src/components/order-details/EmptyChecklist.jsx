function EmptyChecklist() {
  return (
    <div className="flex flex-col items-center justify-center py-20">

      <p className="text-lg font-semibold">
        No checklist found
      </p>

      <p className="text-gray-500">
        AI couldn't extract any items.
      </p>

    </div>
  );
}

export default EmptyChecklist;