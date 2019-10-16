import * as Yup from 'yup';

export const ApartmentSchema = Yup.object().shape({
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  street: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  property: Yup.string()
    .min(1, 'Too Short!')
    .max(5, 'Too Long!')
    .required('Required'),
  apartment: Yup.string()
    .min(1, 'Too Short!')
    .max(5, 'Too Long!')
    .required('Required'),
    price: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
    type: Yup.string()
    .required('Required'),
    description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
