import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./card-pizza.css";

const CardPizza = ({ img, nombre, price, ingredientes }) => {
  return (
    <Card style={{ width: "22rem", height: "32rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <p className="text-muted text-center">Ingredientes</p>
        <ListGroup.Item className="text-center">
          🍕 {ingredientes.join(", ")}
        </ListGroup.Item>
        <ListGroup.Item className="text-center">Precio: {price}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="card-buttons">
        <Button class="btn1">Ver mas 👀</Button>
        <Button class="btn2">Agregar 🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
