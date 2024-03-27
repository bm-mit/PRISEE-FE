import NavBar from "@/components/NavBar/NavBar";
import banner from "@/assets/banner.png";
import { navBarItems } from "@/components/NavBar/navBarItems";

function HomePage() {
  return (
    <>
      <NavBar bannerImage={banner} navItems={navBarItems}></NavBar>
    </>
  );
}

export default HomePage;
