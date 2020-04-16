import { createFormPage } from './utils'
import userData from '../user-data'

const name = (id) => ({
  _beagleType_: 'input',
  id: 'name-field',
  label: 'nome',
  name: 'name',
  value: userData[id]?.personalData?.name,
})

const lastName = (id) => ({
  _beagleType_: 'input',
  id: 'lastname-field',
  label: 'sobrenome',
  name: 'lastname',
  value: userData[id]?.personalData?.lastname,
})

const email = (id) => ({
  _beagleType_: 'input',
  id: 'email-field',
  type: 'email',
  label: 'e-mail',
  name: 'email',
  value: userData[id]?.personalData?.email,
})

const sex = (id) => ({
  _beagleType_: 'select',
  id: 'sex-field',
  label: 'sexo',
  name: 'sex',
  value: userData[id]?.personalData?.sex,
  options: [
    {
      name: 'masculino',
      value: 'm'
    },
    {
      name: 'feminino',
      value: 'f'
    },
    {
      name: 'outro',
      value: 'x'
    }
  ],
})

const age = (id) => ({
  _beagleType_: 'input',
  id: 'age-field',
  label: 'idade',
  name: 'age',
  type: 'number',
  value: userData[id]?.personalData?.age,
})

const cpf = (id) => ({
  _beagleType_: 'input',
  id: 'cpf-field',
  type: 'cpf',
  label: 'cpf',
  name: 'cpf',
  value: userData[id]?.personalData?.cpf,
})

const rg = (id) => ({
  _beagleType_: 'input',
  id: 'id-field',
  label: 'identidade',
  name: 'id',
  value: userData[id]?.personalData?.id,
})

export default function getPersonalDataView(id) {
  console.log(id)
  const inputGroups = [
    [name(id), lastName(id)],
    [email(id), [sex(id), age(id)]],
    [cpf(id), rg(id)]
  ]

  return createFormPage({
    title: 'dados pessoais',
    activePage: 1,
    nextUrl: 'professional-data',
    saveUrl: 'personal-data',
    inputGroups,
  })
}
