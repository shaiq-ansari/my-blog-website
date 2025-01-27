import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter here
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:title" element={<BlogPost />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
