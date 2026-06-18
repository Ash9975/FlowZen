function NotesInput({
  value,
  onChange,
}) {
  return (
    <div className="mt-6">

      <label className="text-[15px] text-gray-600 font-bold">
        Additional Notes
      </label>

      <textarea
        rows={3}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Special packing instructions..."
        className="mt-2 w-full rounded-xl border border-border p-4"
      />

    </div>
  );
}

export default NotesInput;