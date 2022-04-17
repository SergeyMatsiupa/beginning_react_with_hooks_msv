// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { Card } from "react-bootstrap";
import Rating from './Rating';

const styles={
    cardStyle:{
       'flexDirection': 'row',
       'alignItems': 'center'
    },
    cardImgStyle: {
        width: '64px',
        height: '64px',
    }
}

const Product = (props) => {
    return (
     <div>
         <Card style={styles.cardStyle}>
            <Card.Img style={styles.cardImgStyle}
            className="ms-3"
            src={props.data.imageUrl}
            alt="Product Imag"
            />
            <Card.Body>
                <h5> {props.data.productName} </h5>
                {props.data.releasedDate }
                <Rating
                rating={props.data.rating} numOfReviews={props.data.numOfReviews}
                />
                <p> {props.data.description} </p>
            </Card.Body>
        </Card>
     </div>
    );
    }

export default Product;