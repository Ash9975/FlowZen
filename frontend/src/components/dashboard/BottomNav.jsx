import { Home, FileText, Plus, History, User } from "lucide-react";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <div className="fixed
    bottom-0
    left-1/2
    -translate-x-1/2
    w-full
    max-w-md
    border-t
    border-border
    bg-white
    z-50">
      <div className="flex items-center justify-around py-2 font-extrabold">

        <Link
          to="/dashboard"  className="flex flex-col items-center text-primary "
        >
          <Home size={22} />
          <span className="mt-1 text-xs font-medium">
            Home
          </span>
        </Link>

        <Link
          to="/orders"
          className="flex flex-col items-center text-muted-foreground"
        >
          <FileText size={22} />
          <span className="mt-1 text-xs">
            Orders
          </span>
        </Link>

        <Link
          to="/create"
          className="flex h-14 w-14 mb-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card"
        >
          <Plus size={28} />
        </Link>

        <Link
          to="/history"
          className="flex flex-col items-center text-muted-foreground"
        >
          <History size={22} />
          <span className="mt-1 text-xs">
            History
          </span>
        </Link>

        <Link
          to="/profile"
          className="flex flex-col items-center text-muted-foreground"
        >
          <User size={22} />
          <span className="mt-1 text-xs">
            Profile
          </span>
        </Link>

      </div>
    </div>
  );
}

export default BottomNav;