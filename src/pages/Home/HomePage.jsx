import NavBar from "@/components/NavBar/NavBar";
import banner from "@/assets/banner.png";
import { navBarItems } from "@/components/NavBar/navBarItems";

function HomePage() {
  return (
    <div
      className="min-vh-100"
      style={{ backgroundColor: "var(--bs-secondary)" }}
    >
      <NavBar bannerImage={banner} navItems={navBarItems}></NavBar>
    </div>
  );
}

export default HomePage;
