import { ServerRoute } from 'hapi'
import userData from '../user-data'
import getProfessionalDataView from '../views/professional-data'
import { ProfessionalData } from '../types'
import { getRequestRemote } from './utils'

export const loadProfessionalDataView: ServerRoute = {
  method: 'GET',
  path: '/professional-data',
  handler: request => {
    const id = getRequestRemote(request)
    return getProfessionalDataView(id)
  }
}

export const saveProfessionalData: ServerRoute = {
  method: 'POST',
  path: '/professional-data',
  handler: (request, responseToolkit) => {
    const payload = request.payload as ProfessionalData
    const id = getRequestRemote(request)
    userData[id].professionalData = payload
    return responseToolkit.response().code(201)
  }
}
