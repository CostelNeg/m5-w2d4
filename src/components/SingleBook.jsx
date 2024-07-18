
import { Container,  Col, Card } from "react-bootstrap";



function SingleBook({ book, isSelected,onClick }) {

  return (
    <Col  lg={3} md={4} xs={12} sm={6}>
      <Card 
      className={`book-card ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
      >
        <Card.Img
          className=" d-flex align-self-lg-center"
          style={{ height: "200px" }}
          variant="top"
          src={book.img}
        />
        <Card.Body>
          <Card.Title className="TextOverflow">{book.title}</Card.Title>
          <Card.Text className="italic"> <b>Price</b> : {book.price} </Card.Text>
          <Container>
          
          </Container>
        </Card.Body>
  
      </Card>
    </Col>
  );
  
}
export default SingleBook;