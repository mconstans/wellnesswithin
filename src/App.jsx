import MyStory from "./components/MyStory";
import WorkWithMe from "./components/WorkWithMe";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import Banner from "./components/Banner";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="bg-primaryColor text-lightText">
      <Hero />
      <MyStory />
      <Services />
      <Banner />
      <Clients />
      <Resources />
      <WorkWithMe />
    </div>
  );
}

export default App;