import { ServerRoute } from 'hapi'
import userData from '../user-data'
import getPersonalDataView from '../views/personal-data'
import { PersonalData } from '../types'
import { getRequestRemote } from './utils'

export const loadPersonalDataView: ServerRoute = {
  method: 'GET',
  path: '/personal-data',
  handler: request => {
    const id = getRequestRemote(request)
    return getPersonalDataView(id)
  },
}

export const savePersonalData: ServerRoute = {
  method: 'POST',
  path: '/personal-data',
  handler: (request, responseToolkit) => {
    const payload = request.payload as PersonalData
    const id = getRequestRemote(request)
    userData[id] = { personalData: payload }
    return responseToolkit.response().code(201)
  },
}
