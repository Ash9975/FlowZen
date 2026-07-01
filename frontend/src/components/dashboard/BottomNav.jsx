import {
  Home,
  FileText,
  Plus,
  CheckCircle2,
  User,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

function BottomNav() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }

    return location.pathname.startsWith(path);
  };

  const navItems = [
    {
      label: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      label: "Orders",
      icon: FileText,
      path: "/orders",
    },
    {
      label: "Activity",
      icon: CheckCircle2,
      path: "/activity",
    },
    {
      label: "Profile",
      icon: User,
      path: "/profile",
    },
  ];

  return (
    <div
      className="
        fixed
        bottom-0
        left-1/2
        z-50

        w-full
        max-w-md

        -translate-x-1/2

        border-t
        border-[#E7EDD9]

        bg-white/95

        backdrop-blur-xl
      "
    >
      <div className="grid grid-cols-5 items-center px-2 py-3">

        {/* Home & Orders */}

        {navItems.slice(0, 2).map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex justify-center"
            >
              <div
                className={`
                  w-16

                  flex
                  flex-col
                  items-center
                  justify-center

                  rounded-2xl

                  py-2

                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-[#EEF6D8] text-[#7F9E2F]"
                      : "text-[#98A2B3]"
                  }
                `}
              >
                <Icon size={22} />

                <span className="mt-1 text-[11px] font-semibold">
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}

        {/* Create Button */}

        <div className="flex justify-center">
          <Link
            to="/create"
            className="
              -mt-8

              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-full

              bg-[#7F9E2F]

              text-white

              shadow-[0_10px_25px_rgba(127,158,47,0.35)]

              transition-all
              duration-300

              hover:scale-105
              active:scale-95
            "
          >
            <Plus size={30} />
          </Link>
        </div>

        {/* Completed & Profile */}

        {navItems.slice(2).map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex justify-center"
            >
              <div
                className={`
                  w-16

                  flex
                  flex-col
                  items-center
                  justify-center

                  rounded-2xl

                  py-2

                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-[#EEF6D8] text-[#7F9E2F]"
                      : "text-[#98A2B3]"
                  }
                `}
              >
                <Icon size={22} />

                <span className="mt-1 text-[11px] font-semibold">
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNav;