import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserProvider from "@/components/UserProvider";
import { getUserData } from "@/api";

export default async function ViewLayout({ children }: LayoutProps<"/">) {
  const userData = await getUserData();

  return (
    <div className="flex flex-col min-h-screen">
      <UserProvider userData={userData.data || null}>
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </UserProvider>
    </div>
  );
}
