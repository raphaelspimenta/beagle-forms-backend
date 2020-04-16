import { ServerRoute } from 'hapi'
import userData from '../user-data'
import getPaymentView from '../views/payment'
import { Payment } from '../types'
import { getRequestRemote } from './utils'

export const loadPaymentView: ServerRoute = {
  method: 'GET',
  path: '/payment',
  handler: request => {
    const id = getRequestRemote(request)
    return getPaymentView(id)
  },
}

export const savePayment: ServerRoute = {
  method: 'POST',
  path: '/payment',
  handler: (request, responseToolkit) => {
    const payload = request.payload as Payment
    const id = getRequestRemote(request)
    userData[id].payment = payload
    return responseToolkit.response().code(201)
  }
}
