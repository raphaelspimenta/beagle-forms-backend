import { createFormPage } from './utils'
import userData from '../user-data'

const zip = (id) => ({
  _beagleType_: 'input',
  id: 'zip-field',
  label: 'cep',
  name: 'zip',
  value: userData[id]?.address?.zip,
})

const street = (id) => ({
  _beagleType_: 'input',
  id: 'street-field',
  label: 'rua ou avenida',
  name: 'street',
  value: userData[id]?.address?.street,
})

const number = (id) => ({
  _beagleType_: 'input',
  id: 'number-field',
  label: 'número',
  name: 'number',
  type: 'number',
  value: userData[id]?.address?.number,
})

const neighborhood = (id) => ({
  _beagleType_: 'input',
  id: 'neighborhood-field',
  label: 'bairro',
  name: 'neighborhood',
  value: userData[id]?.address?.neighborhood,
})

const telephone = (id) => ({
  _beagleType_: 'input',
  id: 'phone-field',
  label: 'telefone',
  name: 'phone',
  type: 'telephone',
  value: userData[id]?.address?.telephone,
})

const state = (id) => ({
  _beagleType_: 'select',
  id: 'state-field',
  label: 'Estado',
  name: 'state',
  value: userData[id]?.address?.state,
  options: [
    {
      name: 'Minas Gerais',
      value: 'mg'
    },
    {
      name: 'São Paulo',
      value: 'sp'
    },
    {
      name: 'Rio de Janeiro',
      value: 'rj'
    }
  ],
})

const city = (id) => ({
  _beagleType_: 'input',
  id: 'city-field',
  label: 'Cidade',
  name: 'city',
  value: userData[id]?.address?.city,
})

const complement = (id) => ({
  _beagleType_: 'input',
  id: 'complement-field',
  label: 'Complemento',
  name: 'complement',
  value: userData[id]?.address?.complement,
})

export default function getAddressView(id) {
  const inputGroups = [
    [zip(id), street(id)],
    [[number(id), neighborhood(id)], telephone(id)],
    [state(id), city(id)],
    [complement(id)]
  ]

  return createFormPage({
    title: 'endereço',
    activePage: 3,
    previousUrl: 'professional-data',
    nextUrl: 'plan',
    saveUrl: 'address',
    inputGroups,
  })
}
