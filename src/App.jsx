import CardList from './components/CardList';
import CircleImageSlider from './components/CircleImageSlider';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import TextSlider from './components/TextSlider';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <TextSlider />
      <CardList />
      <CircleImageSlider />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
