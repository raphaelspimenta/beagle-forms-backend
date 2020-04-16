import { createFormPage } from './utils'
import userData from '../user-data'

const education = (id) => ({
  _beagleType_: 'select',
  id: 'education-field',
  label: 'Escolaridade',
  name: 'education',
  value: userData[id]?.professionalData?.education,
  options: [
    {
      name: 'Ensino fundamental incompleto',
      value: '1'
    },
    {
      name: 'Ensino fundamental completo',
      value: '2'
    },
    {
      name: 'Colegial incompleto',
      value: '3'
    },
    {
      name: 'Colegial completo',
      value: '4'
    },
    {
      name: 'Ensino superior incompleto',
      value: '5'
    },
    {
      name: 'Ensino superior completo',
      value: '6'
    },
    {
      name: 'Pós-graduação completa ou superior',
      value: '7'
    }
  ],
})

const company = (id) => ({
  _beagleType_: 'input',
  id: 'company-field',
  label: 'Empresa ou instituição de ensino',
  name: 'company',
  value: userData[id]?.professionalData?.company,
  style: {
    'margin-left': '15px',
    flex: 1
  }
})

const area = (id) => ({
  _beagleType_: 'select',
  id: 'area-field',
  label: 'Área de atuação',
  name: 'area',
  value: userData[id]?.professionalData?.area,
  options: [
    {
      name: 'Educação',
      value: 'education'
    },
    {
      name: 'Tecnologia',
      value: 'technology'
    },
    {
      name: 'Construção',
      value: 'construction'
    },
    {
      name: 'Administração',
      value: 'administration'
    },
    {
      name: 'Marketing',
      value: 'marketing'
    },
    {
      name: 'Política',
      value: 'politics'
    },
    {
      name: 'Esportes e bem-estar',
      value: 'sports'
    },
    {
      name: 'Saúde',
      value: 'health'
    }
  ],
})

const profession = (id) => ({
  _beagleType_: 'input',
  id: 'profession-field',
  label: 'Profissão',
  name: 'profession',
  value: userData[id]?.professionalData?.profession,
})

const income = (id) => ({
  _beagleType_: 'input',
  id: 'income-field',
  label: 'Renda média mensal (R$)',
  name: 'income',
  value: userData[id]?.professionalData?.income,
})

export default function getProfessionalDataView(id) {
  const inputGroups = [
    [education(id), company(id)],
    [area(id), profession(id)],
    [income(id), { _beagleType_: 'container' }]
  ]

  return createFormPage({
    title: 'dados profissionais',
    activePage: 2,
    previousUrl: 'personal-data',
    nextUrl: 'address',
    saveUrl: 'professional-data',
    inputGroups,
  })
}
