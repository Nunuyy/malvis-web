import { fetcher } from '@services/fetcher'
import useSWR from 'swr'
interface UseProductData {
  data: any[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
interface UseProductResponse {
  dataProduct?: UseProductData
  isLoadingProduct?: boolean
  isError?: any
}

export const useProduct = (params: string): UseProductResponse => {
  const { data, error } = useSWR(`/api/${params}`, fetcher)
  return {
    dataProduct: data,
    isLoadingProduct: !error && !data,
    isError: error
  }
}
