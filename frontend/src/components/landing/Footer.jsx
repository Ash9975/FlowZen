import { Leaf } from "lucide-react";

function FooterCol({
  title,
  links,
}) {
  return (
    <div>
      <p className="font-display text-sm font-bold">
        {title}
      </p>

      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">

        <div>
          <div className="flex items-center gap-2 font-display text-lg font-extrabold">

            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>

            FlowZen

          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            AI-powered order management for shops,
            warehouses and packing teams.
          </p>
        </div>

        <FooterCol
          title="Product"
          links={[
            "Features",
            "How It Works",
            "Get Started",
          ]}
        />

        <FooterCol
          title="Company"
          links={[
            "About",
            "Contact",
          ]}
        />

        <FooterCol
          title="Legal"
          links={[
            "Privacy",
            "Terms",
            "Security",
          ]}
        />

      </div>

      <div className="border-t border-border">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row">

          <p>
            © {new Date().getFullYear()} FlowZen
          </p>

          <p>
            🌿 Pack smarter, not harder.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;