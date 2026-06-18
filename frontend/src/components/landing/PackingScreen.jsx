import {
  Check,
  ChevronLeft,
  MoreVertical,
} from "lucide-react";

export function PackingScreen({
  customer = "Rahul Store",
  items = [
    {
      name: "Rice",
      qty: "10 kg",
      done: true,
    },
    {
      name: "Sugar",
      qty: "5 kg",
      done: true,
    },
    {
      name: "Tea",
      qty: "20 Boxes",
      done: false,
    },
    {
      name: "Oil",
      qty: "2 L",
      done: false,
    },
  ],
}) {
  const completed =
    items.filter((i) => i.done).length;

  const progress = Math.round(
    (completed / items.length) * 100
  );

  return (
    <div className="flex flex-col px-4 pb-5 pt-12">

      <div className="flex items-center justify-between pb-4">

        <span className="grid h-9 w-9 place-items-center rounded-full bg-muted text-foreground">
          <ChevronLeft className="h-5 w-5" />
        </span>

        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Packing Order
          </p>

          <p className="text-sm font-bold text-foreground">
            {customer}
          </p>
        </div>

        <span className="grid h-9 w-9 place-items-center rounded-full bg-muted text-foreground">
          <MoreVertical className="h-5 w-5" />
        </span>

      </div>

      <div className="rounded-3xl bg-primary p-4 text-primary-foreground shadow-soft">

        <div className="flex items-end justify-between">

          <span className="text-xs font-medium opacity-90">
            Progress
          </span>

          <span className="text-2xl font-extrabold leading-none">
            {progress}%
          </span>

        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-primary-foreground/25">

          <div
            className="h-full rounded-full bg-primary-light transition-all"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <p className="mt-2 text-[11px] opacity-90">
          {completed} of {items.length} items packed
        </p>

      </div>

      <div className="mt-4 space-y-2.5">

        {items.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 rounded-2xl border p-3 ${
              item.done
                ? "border-primary/30 bg-secondary/60"
                : "border-border bg-card"
            }`}
          >
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border-2 ${
                item.done
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background"
              }`}
            >
              {item.done && (
                <Check
                  className="h-4 w-4"
                  strokeWidth={3}
                />
              )}
            </span>

            <span
              className={`flex-1 text-sm font-semibold ${
                item.done
                  ? "text-muted-foreground line-through"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </span>

            <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-bold text-foreground">
              {item.qty}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

