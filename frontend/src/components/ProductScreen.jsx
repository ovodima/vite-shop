import { Link, useParams } from "react-router-dom";
import products from "../products";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Rating from "./Rating";
import { FiArrowLeft, FiShoppingCart } from "react-icons/fi";

export default function ProductScreen() {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === Number(productId));
  console.log(product);
  return (
    <>
      <Link className="btn btn light my-3" to="/">
        <FiArrowLeft /> Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.image} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Discription: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush" >
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                            <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                            <strong>{product.countInStock > 0 ? 'in Stock': 'Sold out'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Button className='btn-block' type="button" disabled={product.countInStock ===0}>
                    <FiShoppingCart />  ADD TO CART
                    </Button>
                </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
