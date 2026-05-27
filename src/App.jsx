import Header from "./components/Header";
import Button from "./components/Button";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-base-200 flex items-center justify-center">
      <div className="card bg-base-300 shadow-sm max-w-sm w-full rounded-2xl overflow-hidden my-8 mx-4">
        <Header />
        <Button />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
