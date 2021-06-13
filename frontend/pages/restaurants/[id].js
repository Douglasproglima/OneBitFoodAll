/* Para o nextJs quando cria-se um arquivo [id].js o mesmo será chamado quando na URL
for passado /id: exemplo www.meusite.com/restaurant/id
*/
import DetailsRestaurant from '../../components/DetailsRestaurant';

/*
export default function Restaurant() {
  return <DetailsRestaurant />
}
*/

export default function Restaurant({ restaurant, isError = false }) {
  return <DetailsRestaurant restaurant={restaurant} isError={isError} />
}

//SSR -> Reinderiza a page do lado do servidor
// No nextJs basta add o método getServerSideProps() na page ao qual deseja usar o SSR e retornar as props
export async function getServerSideProps(context) {
  const { id } = context.query;
  try {
    const data = await fetch(`${process.env.apiUrl}/restaurants/${id}`);
    const restaurant = await data.json();
    const isError = data.ok ? false : true;

    return { props: { restaurant, isError: isError}}
  } catch (error) {

    return { props: { isError: isError}}
  }
}