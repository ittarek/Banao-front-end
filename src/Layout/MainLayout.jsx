
import { Outlet } from 'react-router-dom';
import Navigation from "../ShardComponets/Header/Navigation";
import Footer from '../ShardComponets/Footer/Footer';

const MainLayout = () => {
    return (
      <main>
        <Navigation />
        <Outlet></Outlet> <Footer />
      </main>
    );
};

export default MainLayout;