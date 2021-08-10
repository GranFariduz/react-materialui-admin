// axios instance
import axios from 'config/axios'

// types
import { IAPIResponse, IResponse } from 'types'

type RequestType = 'get' | 'post' | 'put' | 'delete'

export const req = async (
  requestType: RequestType,
  endpoint: string,
  data?: any
): Promise<any | undefined> => {
  return new Promise(async (resolve, reject) => {
    try {
      const requestResult: IResponse = await axios[requestType](
        endpoint,
        requestType === 'get' ? undefined : data
      )

      const responseData: IAPIResponse = requestResult.data

      if (responseData && responseData.success) resolve(responseData.data)
    } catch (err) {
      reject(err)
      console.log(err.response ? err.response.data.message : 'Network Error')
    }
  })
}

export default req
