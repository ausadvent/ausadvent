import { fetchData } from '../utils/fetchServices';
import HeaderClient from './HeaderClient';

export default async function Header() {
    const servicesFetched = await fetchData();
    return <HeaderClient servicesFetched={servicesFetched ?? []} />;
}
