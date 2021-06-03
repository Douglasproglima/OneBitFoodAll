/* Para o nextJs quando cria-se um arquivo [id].js o mesmo será chamado quando na URL
for passado /id: exemplo www.meusite.com/restaurant/id
*/
import DetailsRestaurant from '../../components/DetailsRestaurant';

export default function Restaurant() {
  return <DetailsRestaurant />
} 