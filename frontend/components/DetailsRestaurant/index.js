import {useRouter} from 'next/router';
import {Alert, Spinner} from 'react-bootstrap';
import Details from './Details';
import CategoryProducts from './CategoryProducts';
import getRestaurant from '../../services/api/getRestaurant';

export default function DetailsRestaurant() {
  const router = useRouter();
  const { id } = router.query;
  const { restaurant, isLoading, isError } = getRestaurant(id);

  if(isError)
      return <Alert variant='custom-red'>Erro ao Carregar</Alert>
  else if(isLoading)
      return <Spinner animation='border'/>

  return (
    <>
      <Details { ...restaurant } />
      {
        restaurant.product_categories.map((product_category, i) => 
          <CategoryProducts restaurant={restaurant} {...product_category} key={i}/>
        )
      }
    </>
  )
}