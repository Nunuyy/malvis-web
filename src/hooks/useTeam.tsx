import { fetcher } from '@services/fetcher'
import useSWR from 'swr'
interface UseTeamData {
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
interface UseTeamResponse {
  dataTeam?: UseTeamData
  isLoadingTeam?: boolean
  isError?: any
}

export const useTeam = (params: string): UseTeamResponse => {
  const { data, error } = useSWR(`/api/${params}`, fetcher)
  return {
    dataTeam: data,
    isLoadingTeam: !error && !data,
    isError: error
  }
}
