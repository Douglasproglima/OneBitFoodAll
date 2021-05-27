
import React from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import Restaurant from '../ListRestaurants/Restaurant';

const restaurants = [
  {
    'id': 1,
    'name': 'Lorem ipsum dolor sit amet.',
    'descrition': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, laudantium.',
    'delivery_tax': '5',
    'image_url': '/restaurant.jpeg',
    'category_title': 'Cozinha Japonesa'
  },
  {
    'id': 2,
    'name': 'Lorem ipsum dolor sit amet.',
    'descrition': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, laudantium.',
    'delivery_tax': '6',
    'image_url': '/restaurant.jpeg',
    'category_title': 'Cozinha Italiana'
  }
]

export default function ListRestaurants() {
  return (
    <div className='mt-5'>
      <h3 className='fw-bold'>Restaurantes</h3>
      <Row>
        {restaurants.map((restaurant, i) => <Restaurant {...restaurant} key={i}/>)}
      </Row>
    </div>
  )
}
