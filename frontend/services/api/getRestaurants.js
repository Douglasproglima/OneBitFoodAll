import useSWR from 'swr';
import { useRouter } from 'next/router';

export default function getRestaurants() {
  const router = useRouter();
  const { category, q } = router.query; //Pega na URI

  let params = '';
  if(category) {
    const questionPointCategory = `${params == '' ? '?' : '&'}`;
    params = questionPointCategory + `category=${category}`;
  }

  if(q) {
    const questionPointQuery = `${params == '' ? '?' : '&'}`;
    params = questionPointQuery + `q=${q}`;
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.apiUrl}/api/${process.env.version}/restaurants${params}`,
    fetcher,
    { revalidateOnFocus: false }
  )

  return { restaurants: data, isLoading: !error && !data, isError: error }
}
