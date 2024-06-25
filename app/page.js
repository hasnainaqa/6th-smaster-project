import Navbar from "@/layouts/navbar";
import Hero from "@/components/home/hero/hero";
import Sendfb from "@/components/home/hero/fb_demo/sendfb";
import Integrat from "@/components/home/hero/integration/integrat" 
import Features from "@/components/home/hero/features/features";
import Pricing from "@/components/shared/pricing/pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sendfb/>
      <Integrat/>
      <Features/>
      <Pricing/>
    </>
  );
}
