import Nav from "@/components/Nav/Nav";
import NavBar from "@/components/NavBar/NavBar";
import banner from "@/assets/banner.png";
import { mainNavBarItems, subNavBarItems } from "./navBarItems";

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
      ></NavBar>
      <Nav navItems={subNavBarItems} id="subNavbar" />
    </div>
  );
}

export default HomePage;
