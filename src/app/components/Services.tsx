import { fetchData } from '../utils/fetchServices'
import ServicesClient from './ServicesClient'

export default async function Services() {
  const servicesData = await fetchData()
  return <ServicesClient servicesData={servicesData ?? []} />
}
