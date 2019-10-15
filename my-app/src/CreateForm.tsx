import * as React from 'react';
import { Draft } from "./ModelApartament";
import { CreateAd } from './CreateAd';
import { createNew} from './Conector'



export class CreateForm extends React.Component<any,any>{
  constructor(props:any){
    super(props)
    this.submitting = this.submitting.bind(this);
  }
  
  public submitting(data: Draft){
      createNew(data)
  }


    render(){
        return(
            <CreateAd onSubmit={this.submitting}/>
        )
    }
} 

export default CreateForm