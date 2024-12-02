import BottomNav from "@/components/bottom-nav";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      <ScrollArea className='h-[calc(100vh-74px)] relative overflow-y-auto'>
        {children}
        <ScrollBar className="w-0.5" />
      </ScrollArea>
      <div className="absolute bottom-0 right-0 w-full h-[70px]">
        <BottomNav />
      </div>
    </div>
  );
}
