import {delay} from 'application/utils/delay'
import {IHTTPClient} from 'api/http/IHTTPClient'
import {ISystemService} from './ISystemService'

export class SystemMockService implements ISystemService {

  constructor(httpClient: IHTTPClient) {
    this.httpClient = httpClient
  }

  httpClient: IHTTPClient

  getSystem = async () => {
    let res = await delay({
        rootPath: '',
        lang: 'en'
      },
      1000)
    return res
  }

}

export default SystemMockService