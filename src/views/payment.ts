import { createFormPage } from './utils'
import userData from '../user-data'

const number = (id) => ({
  _beagleType_: 'input',
  id: 'card-number-field',
  label: 'número',
  name: 'number',
  type: 'number',
  maxlength: 16,
  autocomplete: 'cc-number',
  value: userData[id]?.payment?.number,
})

const name = (id) => ({
  _beagleType_: 'input',
  id: 'card-name-field',
  autocomplete: 'cc-name',
  label: 'Nome como escrito no catão',
  name: 'name',
  value: userData[id]?.payment?.name,
})

const expiry = (id) => ({
  _beagleType_: 'input',
  id: 'card-expiry-field',
  label: 'validade',
  name: 'expiry',
  placeholder: '01-2020',
  autocomplete: 'cc-exp',
  value: userData[id]?.payment?.expiry,
})

const cvv = (id) => ({
  _beagleType_: 'input',
  id: 'card-cvv-field',
  label: 'cvv',
  name: 'cvv',
  type: 'number',
  autocomplete: 'cc-csc',
  value: userData[id]?.payment?.cvv,
})

const terms = (id) => {
  const price = userData[id]?.plan
    ? userData[id]?.plan.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : ''

  return {
    _beagleType_: 'checkbox',
    id: 'terms-field',
    name: 'terms',
    value: userData[id]?.payment?.terms,
    position: 'left',
    style: {
      margin: '10px 0',
      flex: 1,
    },
    children: [
      {
        _beagleType_: 'text',
        style: {
          margin: '0 10px',
          'font-size': '14px',
        },
        value: `Aceito que será cobrado um valor mensal de ${price} no cartão cujo os dados foram inseridos acima.`,
      },
    ],
  }
}

export default function getPaymentView(id) {
  const inputGroups = [
    [name(id), number(id)],
    [expiry(id), cvv(id)],
    terms(id),
  ]

  return createFormPage({
    title: 'pagamento por cartão de crédito',
    activePage: 5,
    previousUrl: 'plan',
    nextUrl: 'success',
    saveUrl: 'payment',
    inputGroups,
  })
}
