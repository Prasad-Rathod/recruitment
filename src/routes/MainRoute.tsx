import CategoryTabs from "../Components/CategoryTabs"
import Article from "../Components/Article"
import ArticlesGrid from "../Components/ArticlesGrid"
import Categories from "../Components/Categories"
import Newsletter from "../Components/Newsletter"

function MainRoute() {
    return (
      <>
        <CategoryTabs />
        <Article />
        <ArticlesGrid />
        <Categories />
        <Newsletter />
      </>
    );
}

export default MainRoute