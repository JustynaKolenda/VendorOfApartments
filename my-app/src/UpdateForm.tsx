import * as React from 'react';
import { ExtendedApartmentModel } from "./ModelApartament";
import  CreateAd  from './CreateAd';
import { updateAdvertisement,getApartmen} from './Conector'
import { Formik } from 'formik';
import {ApartmentSchema} from './Validation'

type Apartment = {
    apartment: ExtendedApartmentModel
}

export class UpdateForm extends React.Component<any,Apartment>{
  constructor(props:any){
    super(props);
    this.state = {
        apartment: {
            id:0,
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
  
    public submitting(updateData: ExtendedApartmentModel,){
        updateAdvertisement(updateData, this.state.apartment.id).then(resp => {
            this.props.history.push(`/apartament/${this.state.apartment.id}`)
        })
        
    }

    public getApp(id:number){
        getApartmen(id).then(resp => { 
            this.setState({
                apartment: resp.data
            })      
        })
    }

    componentDidMount(){
        this.getApp(this.props.match.params.id) 
    }

    render(){
        return(
            <>
            <h1>Update Apartment</h1>
            {this.state.apartment.id !==0 &&
            <Formik
                validationSchema={ApartmentSchema}
                initialValues={this.state.apartment}
                onSubmit={this.submitting}
                >
                    {(props)=><CreateAd {...props}/>}
                    
                </Formik>   
            } 
            </>    
        )
    }
} 