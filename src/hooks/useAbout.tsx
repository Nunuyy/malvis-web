import { fetcher } from '@services/fetcher'
import useSWR from 'swr'
interface UseAboutData {
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
interface UseAboutResponse {
  dataAbout?: UseAboutData
  isLoadingAbout?: boolean
  isError?: any
}

export const useAbout = (params: string): UseAboutResponse => {
  const { data, error } = useSWR(`/api/${params}`, fetcher)
  return {
    dataAbout: data,
    isLoadingAbout: !error && !data,
    isError: error
  }
}
