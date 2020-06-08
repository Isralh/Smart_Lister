import * as Yup from 'yup'

export const FirstFormSchema = {

  schema: Yup.object({
    address: Yup.string().required('Required'),
    cityState: Yup.string().required('Required'),
    zipcode: Yup.number().required('Required').min(5, 'please enter a valid zipcode'),
    longitude: Yup.number().required('Required'),
    latitude: Yup.number().required('Required')
  })
}
