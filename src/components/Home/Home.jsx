import pizza1 from "../../assets/img/napolitana.jpg";
import pizza2 from "../../assets/img/española.jpg";
import pizza3 from "../../assets/img/pepperoni.jpg";

import Header from "../Header/Header";
import CardPizza from "../Card-pizza/CardPizza";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="py-5">
          <Col>
            <CardPizza
              img={pizza1}
              nombre="Napolitana"
              ingredientes={["mozzarella", "tomates", "jamón", "orégano"]}
              price="5950"
            />
          </Col>
          <Col>
            <CardPizza
              img={pizza2}
              nombre="Española"
              ingredientes={[
                "mozzarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              price="6950"
            />
          </Col>
          <Col>
            <CardPizza
              img={pizza3}
              nombre="Pepperoni"
              ingredientes={["mozzarella", "pepperoni", "orégano"]}
              price="6950"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
