import Image from "next/image";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Openvacancies from "../sections/Openvacancies";
import EQbeatsIQ from "../sections/EQbeatsIQ";
import BeBestYou from "../sections/BeBestYou";
import EverWonder from "../sections/EverWonder";
import Test from "../sections/Test";
import WorkWithUs from "../sections/WorkWithUs";
import MeetAheadCard from "@/sections/MeetAheadCard";
import DoesThisSoundFamiliar from "../sections/DoesThisSoundFamiliar";
import MasterLife from "@/sections/MasterLife";
import SelfImprovement from "@/sections/SelfImprovement";
export default function Home() {
  return (
    <>
      <Navbar />
      <MasterLife/>
      <EQbeatsIQ />
      <DoesThisSoundFamiliar />
      <MeetAheadCard/>
      <SelfImprovement/>
      <BeBestYou />
      <EverWonder />
      <Test />
      <WorkWithUs />
      <Openvacancies />
      <Footer />
    </>
  );
}
