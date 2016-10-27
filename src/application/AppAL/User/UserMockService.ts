import {delay} from 'application/utils/delay'
import {IHTTPClient} from 'application/api/http/IHTTPClient'
import {IUserService} from './IUserService'

export class UserMockService implements IUserService {

  constructor(httpClient: IHTTPClient) {
    this.httpClient = httpClient
  }

  httpClient: IHTTPClient

  getMe = async () => {
    // if (Math.random() > 0.5) {
    //   throw new Error('qwe')
    // }

    let res = await delay(
      {
        name: 'user',
        lang: 'en',
        permissions: {v: 1}
      },
      1000
    )

    return res
  }

}

export default UserMockService