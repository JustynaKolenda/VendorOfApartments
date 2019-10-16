import * as React from 'react';
import { Draft } from "./ModelApartament";
import  CreateAd  from './CreateAd';
import { createNew} from './Conector';
import { Formik } from 'formik';
import {ApartmentSchema} from './Validation'

type Apartment = {
  apartment: Draft
}


export class CreateForm extends React.Component<any,Apartment>{
constructor(props:any){
  super(props);
  this.state = {
      apartment: {
          city: '',
          street:'',
          property:0,
          apartment:0,
          price:0,
          type:0,
          description:''
      }
  }
  this.submitting = this.submitting.bind(this);
}

  public submitting(data: Draft){
    createNew(data).then(resp =>{
      this.props.history.push('/');
    });
   
  }

  render(){
      return(
          <>
          <h1>Create new advertisement</h1>
          <Formik
              validationSchema={ApartmentSchema}
              initialValues={this.state.apartment}
              onSubmit={this.submitting}
              >
                {(props)=><CreateAd {...props}/>}
              </Formik>
          </>    
      )
  }
} 