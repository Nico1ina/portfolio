import Section from "@/src/ui/components/navigation/Section/Section";
import VerticalNav from "@/src/ui/components/navigation/VerticalNav/VerticalNav";

export default function Home() {
  return (
    <main className="bg-white w-screen h-screen flex flex-col">
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      <div className="flex flex-row">
        <div className="text-left pr-[200px] font-serif text-[100px] pl-10">
          <Section />
        </div>
        <div className="mt-[400px]">
          <VerticalNav />
        </div>
      </div>
    </main>
  );
}
