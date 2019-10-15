
import * as React from 'react';
import { ExtendedApartmentModel } from "./ModelApartament";
import { CreateAd } from './CreateAd';
import { updateAdvertisement} from './Conector'


export class UpdateForm extends React.Component<any,any>{
  constructor(props:any){
    super(props)
    this.submitting = this.submitting.bind(this);
  }
  
    public submitting(updateData: ExtendedApartmentModel){
        updateAdvertisement(updateData)
    }

    componentDidMount(){
        this.state.apartments
    }

    render(){
        return(
            <CreateAd onSubmit={this.submitting}/>
        )
    }
} 

export default UpdateForm