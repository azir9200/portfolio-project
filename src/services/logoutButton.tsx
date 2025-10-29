"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/services/AuthService";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await logout();
      localStorage.clear();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
      localStorage.clear();
      window.location.href = "/";
    }
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="w-full flex items-center gap-2 text-sm hover:text-destructive hover:border-destructive"
    >
      {/* <LogOut size={16} /> */}
      Logout
    </Button>
  );
}
