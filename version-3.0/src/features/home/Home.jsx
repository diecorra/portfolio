import DescriptionCard from './DescriptionCard';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="container mx-auto px-10 min-h-screen flex flex-col">
      <Navbar />
      <DescriptionCard />
    </div>
  );
};

export default Home;
