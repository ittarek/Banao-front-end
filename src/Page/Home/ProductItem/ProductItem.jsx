import "./ProductItem.css"



import { Button, Card } from 'react-bootstrap';
import location from "../../../assets/location.png"
import pepole from "../../../assets/pepole.png"
import Program from "../../../assets/programm.png";
import  Product from "../../../assets/cart.png"

const productData = [
  {
    id: 1,
    title: "People ",
    details:
      "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    icons: `${pepole}`,
    btn: "Connect",
  },
  {
    id: 2,
    title: "Place ",
    details:
      "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    icons: `${location}`,
    btn: "Meet Up",
  },
  {
    id: 3,
    title: "Product ",
    details:
      "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    icons: `${Product}`,
    btn: "Get it",
  },
  {
    id: 4,
    title: "Program ",
    details:
      "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    icons: `${Program}`,
    btn: "Attend",
  },
];

const ProductItem = () => {
    return (
      <main className="container  row my-5 mx-auto ">
        {productData.map((data, index) => (
          <div key={data.id} className="col-lg-6 mx-auto mb-5">
            <Card
              className={`product-card ${index === 0 ? "first-card" : ""} ${
                index === 1 ? "second-card" : ""
              } ${index === 2 ? "third-card" : ""} ${index === 3 ? "four-card": ""}`}
            >
              <Card.Body>
                <Card.Subtitle className="mb-2 d-flex align-items-center gap-4">
                  <img src={data.icons} alt="icon" />
                  {data.title}
                </Card.Subtitle>
                <Card.Text className="details">{data.details}</Card.Text>

                <Card.Link href="#">
                  <Button className="product-button">{data.btn}</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </main>
    );
};

export default ProductItem;
