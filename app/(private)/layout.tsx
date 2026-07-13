import { Footer } from "@/pages/footer";
import { MenuResponsive } from "@/pages/setMenuResponse";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <MenuResponsive />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
