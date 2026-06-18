import {
  Check,
  ImageIcon,
  Sparkles,
  PartyPopper,
} from "lucide-react";

export function UploadScreen() {
  return (
    <div className="flex flex-col gap-3 px-4 pb-5 pt-12">
      <p className="text-center text-sm font-bold text-foreground">
        New Order
      </p>

      <div className="rounded-3xl border-2 border-dashed border-primary/40 bg-secondary/40 p-5 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
          <ImageIcon className="h-6 w-6" />
        </span>

        <p className="mt-3 text-sm font-bold text-foreground">
          Upload order image
        </p>

        <p className="mt-1 text-[11px] text-muted-foreground">
          Screenshot, photo or note
        </p>
      </div>

      <div className="space-y-2 rounded-2xl bg-card p-3 shadow-soft">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary-light px-3 py-2 text-[11px] font-medium text-foreground">
          Rice 10kg, Sugar 5kg
        </div>

        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary-light px-3 py-2 text-[11px] font-medium text-foreground">
          Tea 20 boxes, Oil 2L
        </div>
      </div>
    </div>
  );
}

export function ExtractScreen() {
  const rows = [
    { name: "Rice", qty: "10 kg" },
    { name: "Sugar", qty: "5 kg" },
    { name: "Tea", qty: "20 Boxes" },
    { name: "Oil", qty: "2 L" },
  ];

  return (
    <div className="flex flex-col gap-3 px-4 pb-5 pt-12">
      <div className="flex items-center justify-center gap-2 text-primary">
        <Sparkles className="h-4 w-4" />
        <p className="text-sm font-bold">
          AI extracting...
        </p>
      </div>

      <div className="space-y-2 rounded-3xl bg-card p-3 shadow-soft">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5"
          >
            <span className="text-sm font-semibold text-foreground">
              {r.name}
            </span>

            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-bold text-foreground">
              {r.qty}
            </span>
          </div>
        ))}
      </div>

      <p className="text-center text-[11px] text-muted-foreground">
        4 items detected
      </p>
    </div>
  );
}

export function CompleteScreen({
  customer = "Rahul Store",
}) {
  return (
    <div className="flex flex-col items-center gap-3 px-4 pb-8 pt-16 text-center">

      <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft">
        <Check
          className="h-8 w-8"
          strokeWidth={3}
        />
      </span>

      <PartyPopper className="h-5 w-5 text-primary" />

      <p className="font-display text-lg font-extrabold text-foreground">
        Order Complete!
      </p>

      <p className="text-xs text-muted-foreground">
        {customer} · 4/4 items packed
      </p>

      <div className="mt-2 w-full rounded-2xl bg-secondary/60 p-3">
        <div className="flex items-center justify-between text-[11px] font-semibold text-foreground">
          <span>Packed in</span>
          <span>3 min 12s</span>
        </div>
      </div>

      <div className="mt-1 w-full rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground">
        Start next order
      </div>

    </div>
  );
}