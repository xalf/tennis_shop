import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorCatcher from "@/components/ErrorCatcher";

export default function ViewLayout({ children }: LayoutProps<"/">) {
    return <div className="flex flex-col min-h-screen">
        <Header />
        <ErrorCatcher>
          <div className="grow">{children}</div>
        </ErrorCatcher>
        <Footer />
    </div>
}