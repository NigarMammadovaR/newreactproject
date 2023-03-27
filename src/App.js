import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Women from "./pages/Women's";
import Men from "./pages/Men's";
import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Search from "./pages/Search";








function App() {
  return (
   
  <div className="App">
  <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/women" element={<Women/>}/>
    <Route path="/men" element={<Men/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/pages" element={<Pages/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/search" element={<Search/>}/>
   </Routes>
   </div>
  
  );
}

export default App;
