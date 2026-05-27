import Header from "./components/Header";
import Button from "./components/Button";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
      <div className="card bg-base-300 w-96 shadow-sm">
        <Header />
        <Button />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
