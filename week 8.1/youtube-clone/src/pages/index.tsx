import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard title="How to connect database in Next js" thumbImage="https://img.youtube.com/vi/ORqN_j8iqqw/maxresdefault.jpg" profileImage="https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s68-c-k-c0x00ffffff-no-rj" author="Chai aur code" views="100k" timestamp="12 days ago"/>
    </div>
  )
}
