import Banner from "./Banner";
import Hobby from "./Hobby/Hobby";
import ProductItem from "./ProductItem/ProductItem";
import AddNow from "./addYourOwn/AddNow";
import Testimonial from "./testimonial/Testimonial";


const Home = () => {
    return (
        <>
         <Banner/> 
         <ProductItem/> 
         <AddNow /> 
         <Testimonial/>
         <Hobby/>
        </>
    );
};

export default Home;