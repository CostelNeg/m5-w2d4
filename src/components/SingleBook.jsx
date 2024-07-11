import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BookReviews from "./BookReviews";


function SingleBook({ book, isSelected,onClick }) {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <Col  lg={2} md={3} xs={6}>
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
            <Row>
              <Col className="d-flex justify-content-between">
                <Button variant="primary">Add to cart</Button>
                <Button variant="success">Hide</Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
          {
            <button onClick={ () => setShowReviews(!showReviews)}>
              {showReviews ? 'Nascondi recensioni' : 'Mostra recensioni'}
            </button>
          }
          {
            showReviews &&<BookReviews bookAsin={book.asin} />
          }
      </Card>
    </Col>
  );
  
}
export default SingleBook;