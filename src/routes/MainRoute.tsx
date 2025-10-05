import Footer from "../Components/Footer"
import Navigation from "../Components/Navigation"
import CategoryTabs from "../Components/CategoryTabs"
import Article from "../Components/Article"
import ArticlesGrid from "../Components/ArticlesGrid"
import Categories from "../Components/Categories"
import Newsletter from "../Components/Newsletter"
import About from "../Pages/About"


function MainRoute() {

    return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <CategoryTabs />
      <main>
        <About/>
        <Article />
        <ArticlesGrid />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default MainRoute


