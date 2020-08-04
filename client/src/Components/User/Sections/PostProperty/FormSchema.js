import * as Yup from 'yup'

export const ValidationSchema = {
  OnChange: false,
  OnBlur: false
}
export const FirstFormSchema = {

  schema: Yup.object({
    address: Yup.string().required('Required'),
    cityState: Yup.string().required('Required'),
    zipcode: Yup.number().required('Required').min(5, 'please enter a valid zipcode'),
    beds: Yup.number().required('Required'),
    baths: Yup.number().required('Required')
  }),

  initialValues: {
    beds: '',
    baths: '',
    address: '',
    cityState: '',
    zipcode: ''
  }

}

export const SecondFormSchema = {
  schema: Yup.object({
    sqFt: Yup.number().required('Required'),
    garages: Yup.number().required('Required'),
    price: Yup.number().required('Required'),
  }),
  initialValues: {
    sqFt: '',
    garages: '',
    price: ''
  }
}
