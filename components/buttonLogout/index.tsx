"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { LogOutIcon } from "lucide-react";

export function BotaoLogout() {
  const router = useRouter();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }

    router.replace("/login");
    router.refresh();
  }

  return (
    <button onClick={handleLogout} className="cursor-pointer" title="Sair">
      <LogOutIcon className="size-6 text-gray-600" />
    </button>
  );
}
