import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
    // El enrutador es lo que envuelve a nuestra
    // aplicación, así podemos usar el sistema
    // de las rutas
    // usando url
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<LayoutPublic />}>
                        <Route element={<Inicio />} path="/"></Route>
                        <Route element={<Contacto />} path="/contacto"></Route>
                        <Route element={<Blog />} path="/blog"></Route>
                        <Route
                            element={<BlogDetails />}
                            path="/blog/:id"
                        ></Route>
                        <Route element={<NotFound />} path="*" />
                    </Route>
                </Routes>
                {/* <p>Footer app</p> */}
            </div>
        </>
    );
};

export default App;
