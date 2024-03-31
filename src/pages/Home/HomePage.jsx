import Nav from "@/components/Nav/Nav";
import NavBar from "@/components/NavBar/NavBar";
import banner from "@/assets/banner.png";
import { mainNavBarItems, subNavBarItems } from "./navBarItems";

import HomePageMainSection from "./HomePageMainSection";
import "./HomePage.css";

function HomePage() {
  return (
    <div
      className="min-vh-100"
      style={{ backgroundColor: "var(--bs-secondary)" }}
    >
      <NavBar
        bannerImage={banner}
        navItems={mainNavBarItems}
        id="mainNavBar"
        collapseSize="lg"
      ></NavBar>
      <Nav
        navItems={subNavBarItems}
        id="subNavbar"
        isExpand={true}
        collapseSize="xl"
        collapseButtonClassName="bg-white"
        containerClassName="justify-content-between"
        itemsClassName="text-white link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover"
      />
      <HomePageMainSection />
    </div>
  );
}

export default HomePage;
