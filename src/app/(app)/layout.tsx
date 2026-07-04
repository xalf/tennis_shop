import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserProvider from "@/providers/UserProvider";
import { getUserData } from "@/api";
import FavoriteProvider from "@/providers/FavoriteProvider";

export default async function ViewLayout({ children }: LayoutProps<"/">) {
  const userData = await getUserData();

  return (
    <div className="flex flex-col min-h-screen">
      <UserProvider userData={userData.data || null}>
        <FavoriteProvider>
          <Header />
          <div className="grow">{children}</div>
          <Footer />
        </FavoriteProvider>
      </UserProvider>
    </div>
  );
}
