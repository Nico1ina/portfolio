import Menu from "@/src/ui/components/navigation/Menu/Menu";
import Footer from "@/src/ui/components/navigation/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-[#ece7e1] flex flex-col min-h-screen justify-between overflow-hidden relative">
      <Menu />
      <div className="overflow-hidden h-10 relative group">
        <div className="animate-slide-down absolute bottom-10 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white group-hover:animate-fall">
            Sliding Text
          </h1>
        </div>
        <div className="animate-slide-up absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white group-hover:animate-fall">
            Sliding Text
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
