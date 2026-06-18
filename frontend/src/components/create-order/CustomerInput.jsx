function CustomerInput({
  value,
  onChange,
}) {
  return (
    <div>
      <label className="text-[15px] text-gray-600  font-bold">
        Customer / Business Name
      </label>

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="e.g  Rahul Store"
        className="mt-2 h-12 w-full font-semibold text-gray-500 rounded-xl border border-border px-4"
      />
    </div>
  );
}

export default CustomerInput;