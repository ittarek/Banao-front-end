import "./ProductItem.css"



import { Button, Card } from 'react-bootstrap';
import location from "../../../assets/location.png"
import pepole from "../../../assets/pepole.png"
import Program from "../../../assets/programm.png";
import  Product from "../../../assets/cart.png"
import { useState } from "react";
import peopoleHover from "../../../assets/Vector1-hover.png"
import locationHover from "../../../assets/place-hover.png";
const productData = [
  {
    id: 1,
    title: "People ",
    details:
      "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    icons: `${pepole}`,
    hoverIcon: `${peopoleHover}`,
    btn: "Connect",
  },
  {
    id: 2,
    title: "Place ",
    details:
      "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    icons: `${location}`,
    hoverIcon: `${locationHover}`,
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

  const [isHovered, setIsHovered] = useState(false);
    return (
      <main className="container  row my-5 mx-auto ">
        {productData.map((data, index) => (
          <div key={data.id} className="col-lg-6 mx-auto mb-5">
            <Card
              className={`product-card ${index === 0 ? "first-card" : ""} ${
                index === 1 ? "second-card" : ""
              } ${index === 2 ? "third-card" : ""} ${
                index === 3 ? "four-card" : ""
              }`}
            >
              <Card.Body>
                <Card.Subtitle
                  className="mb-2 d-flex align-items-center gap-4"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img
                    src={isHovered ? data.hoverIcon : data.icons}
                    alt="icon"
                    className="icon"
                  />
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
