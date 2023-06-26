import DescriptionCard from './DescriptionCard';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="container mx-auto px-12 min-h-screen flex flex-col">
      <Navbar />
      <DescriptionCard />
    </div>
  );
};

export default Home;
