import { AxiosRequestConfig } from 'axios'

import api from '@services/api'

export const fetcher = (url: string | null, config?: AxiosRequestConfig) => {
  if (!url) return null
  return api
    .get(url, config)
    .then((res) => {
      return res.data
    })
    .catch(() => null)
}
