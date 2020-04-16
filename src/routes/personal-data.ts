import { ServerRoute } from 'hapi'
import userData from '../user-data'
import getPersonalDataView from '../views/personal-data'
import { PersonalData } from '../types'

export const loadPersonalDataView: ServerRoute = {
  method: 'GET',
  path: '/personal-data',
  handler: request => {
    const id = request.info.remoteAddress
    return getPersonalDataView(id)
  },
}

export const savePersonalData: ServerRoute = {
  method: 'POST',
  path: '/personal-data',
  handler: (request, responseToolkit) => {
    const payload = request.payload as PersonalData
    const id = request.info.remoteAddress
    userData[id] = { personalData: payload }
    return responseToolkit.response().code(201)
  },
}
