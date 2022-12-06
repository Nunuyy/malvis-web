import { fetcher } from '@services/fetcher'
import useSWR from 'swr'
interface UseClientData {
  data: any
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
interface UseClientResponse {
  dataClient?: UseClientData
  isLoadingClient?: boolean
  isError?: any
}

export const useClient = (params: string): UseClientResponse => {
  const { data, error } = useSWR(`/api/${params}`, fetcher)
  return {
    dataClient: data,
    isLoadingClient: !error && !data,
    isError: error
  }
}
