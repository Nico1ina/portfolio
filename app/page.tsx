import Menu from "@/src/ui/components/navigation/Menu/Menu";
import Footer from "@/src/ui/components/navigation/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-[#ece7e1] flex flex-col min-h-screen justify-between">
      <Menu />
      <Footer />
    </div>
  );
}
