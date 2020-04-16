import { ServerRoute } from 'hapi'
import userData from '../user-data'
import getAddressView from '../views/address'
import { Address } from '../types'
import { getRequestRemote } from './utils'

export const loadAddressView: ServerRoute = {
  method: 'GET',
  path: '/address',
  handler: request => {
    const id = getRequestRemote(request)
    return getAddressView(id)
  },
}

export const saveAddress: ServerRoute = {
  method: 'POST',
  path: '/address',
  handler: (request, responseToolkit) => {
    const payload = request.payload as Address
    const id = getRequestRemote(request)
    userData[id].address = payload
    return responseToolkit.response().code(201)
  }
}
