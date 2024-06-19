import Navbar from "@/layouts/navbar";
import Hero from "@/components/home/hero/hero";
import styles from './page.module.css';
import Sendfb from "@/components/home/hero/fb_demo/sendfb";
import Integrat from "@/components/home/hero/integration/integrat" 
import Features from "@/components/home/hero/features/features";
import Pricing from "@/components/shared/pricing/pricing";
import SignIn from "@/components/signIn";

export default function Home() {
  const a = "Get started by editing"
  return (
    <>
      <Navbar />
      <SignIn/>
      <Hero />
      <Sendfb/>
      <Integrat/>
      <Features/>
      <Pricing/>
    </>
  );
}
