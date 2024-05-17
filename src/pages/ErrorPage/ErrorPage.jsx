import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <h1 className="my-40 text-center text-xl">Error 404</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;