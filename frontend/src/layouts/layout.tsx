//import Display from "../components/Display";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";


interface Props {
    children: React.ReactNode;
}

const Layout = ({children}:Props) =>{
    return <div className = "flex flex-col min-h-screen bg-gray-900">
        <Header></Header>
        <Hero></Hero>
        <div className="container flex-1">
            {children}
        </div>
        <Footer></Footer>
    </div>;
};

export default Layout;