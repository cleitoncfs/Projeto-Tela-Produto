import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import TransparencySection from "./components/TransparencySection";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // duração da animação em ms
            once: true, // anima apenas uma vez
        });
    }, []);

    return (
        <div>
            <Header />
            <ProductDetails />
            <TransparencySection />
            <Footer />
        </div>
    );
};

export default App;
