import { fetcher } from '@services/fetcher'
import useSWR from 'swr'
interface UseSolutionData {
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
interface UseSolutionResponse {
  dataSolution?: UseSolutionData
  isLoadingSolution?: boolean
  isError?: any
}

export const useSolution = (params: string): UseSolutionResponse => {
  const { data, error } = useSWR(`/api/${params}`, fetcher)
  return {
    dataSolution: data,
    isLoadingSolution: !error && !data,
    isError: error
  }
}
