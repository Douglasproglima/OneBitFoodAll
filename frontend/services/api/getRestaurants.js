import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import addressState from '../../store/atoms/addressAtom';

export default function getRestaurants() {
  const router = useRouter();
  const { category, q } = router.query; //Pega na URI
  const [address] = useRecoilState(addressState);

  let params = '';
  if(category) {
    const questionPointCategory = `${params == '' ? '?' : '&'}`;
    params = questionPointCategory + `category=${category}`;
  }

  if(q) {
    const questionPointQuery = `${params == '' ? '?' : '&'}`;
    params = questionPointQuery + `q=${q}`;
  }

  if (address.city != '') {
    const questionPointCity = `${params == '' ? '?' : '&'}`;
    params = questionPointCity + `city=${address.city}`
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.apiUrl}/api/${process.env.version}/restaurants${params}`,
    fetcher,
    { revalidateOnFocus: false }
  )

  return { restaurants: data, isLoading: !error && !data, isError: error }
}
