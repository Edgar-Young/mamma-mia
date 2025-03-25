// import pizza1 from "../../assets/img/napolitana.jpg";
// import pizza2 from "../../assets/img/española.jpg";
// import pizza3 from "../../assets/img/pepperoni.jpg";

import Header from "../Header/Header";
import CardPizza from "../Card-pizza/CardPizza";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { pizzas } from "../Card-pizza/pizzas";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="py-5">
          {pizzas.map((pizza) => (
            <Col key={pizza.id} md={4} className="mb-4">
              <CardPizza
                key={pizza.id}
                name={pizza.name}
                img={pizza.img}
                desc={pizza.desc}
                ingredients={pizza.ingredients}
                price={pizza.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
