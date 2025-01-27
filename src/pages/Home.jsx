import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPost";
import FeaturedVideo from "../components/home/FeaturedVideo";
function Home() {
  return <>
  <Navbar />
  <Hero />
  <FeaturedPosts />
  <FeaturedVideo />
  <Footer />
  </>
}
export default Home;