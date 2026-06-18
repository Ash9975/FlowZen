function CompleteOrderButton({
  disabled,
  onComplete,
}) {
  return (
    <div className="fixed bottom-28 left-1/2 -translate-x-1/2 max-w-fit max-w-md  z-40">

      <button
        disabled={disabled}
        onClick={onComplete}
        className="
w-full
h-16
px-6
rounded-2xl

bg-gradient-to-r
from-[#2563EB]
via-[#1D4ED8]
to-[#1E40AF]

text-white
text-lg
font-bold

shadow-[0_8px_25px_rgba(37,99,235,0.35)]

transition-all
duration-200

hover:scale-[1.02]
hover:brightness-110
hover:shadow-[0_12px_30px_rgba(37,99,235,0.45)]

active:scale-95
active:brightness-95
"
      >
        Complete Order
      </button>

    </div>
  );
}

export default CompleteOrderButton;