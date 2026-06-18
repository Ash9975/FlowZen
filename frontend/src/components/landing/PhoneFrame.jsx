export function PhoneFrame({
  children,
  className = "",
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[300px] ${className}`}
    >
      <div className="relative rounded-[2.75rem] border border-border bg-card p-2.5 shadow-float">

        <span className="absolute -left-[3px] top-24 h-12 w-[3px] rounded-l-full bg-border" />

        <span className="absolute -right-[3px] top-20 h-8 w-[3px] rounded-r-full bg-border" />

        <div className="relative overflow-hidden rounded-[2.1rem] bg-background">
          <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-foreground/90" />

          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}