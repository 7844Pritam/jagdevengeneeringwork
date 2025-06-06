import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Users,
  Settings,
  FileText,
  ShoppingCart,
  Home,
  Package,
  Contact,
  Workflow,
} from "lucide-react";
import { cn } from "./utils";
import { Button } from "./Button";

const initialNavigation = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Brands", href: "/admin/brands", icon: Users },
  { name: "Blogs", href: "/admin/blogs", icon: Package },
  { name: "Contacts", href: "/admin/contact", icon: Contact },
  { name: "Carrer", href: "/admin/carrers", icon: Workflow },
  // { name: "Reports", href: "/reports", icon: FileText },
  // { name: "Settings", href: "/settings", icon: Settings },
];

export function AdminSidebar() {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();

  const handleClick = (name, href) => {
    setActive(name);
    navigate(href);
  };

  return (
    <div className="flex h-full w-64 flex-col bg-background border-r">
      <div className="flex h-16 items-center px-6 border-b">
        <h1 className="text-xl font-semibold">Jagdev Engineering Works</h1>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {initialNavigation.map((item) => (
          <Button
            key={item.name}
            variant={active === item.name ? "secondary" : "ghost"}
            className={cn("w-full justify-start", active === item.name && "bg-secondary text-white")}
            onClick={() => handleClick(item.name, item.href)}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Button>
        ))}
      </nav>
    </div>
  );
}
