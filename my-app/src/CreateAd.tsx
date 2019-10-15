import * as React from 'react'
import { Draft } from './ModelApartament';

type ApartmentS = {
    apartments: Draft
}

export class CreateAd extends React.Component<any,ApartmentS>{
    constructor(props:any){
        super(props)
        this.state = {
            apartments: {
                city: '',
                street:'',
                property:0,
                apartment:0,
                price:0,
                type:0,
                description:''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   
    public handleCityChange = (e:any) => {
        this.setState({
            apartments:{
                ...this.state.apartments,
                city: e.target.value
            }
        });
    }
    public handleStreetChange = (e:any) => {
        this.setState({
        apartments:{
            ...this.state.apartments,
            street: e.target.value
        }
    });
    }

    public handlePropertyChange = (e:any) => {
        this.setState({
            apartments:{
                ...this.state.apartments,
                property: e.target.value
            }
        });
    }
    
    public handleApartmentChange = (e:any) => {
        this.setState({
            apartments:{
                ...this.state.apartments,
                apartment: e.target.value
            }
        });
    }

    public handlePriceChange = (e:any) => {
        this.setState({
            apartments:{
                ...this.state.apartments,
                price: e.target.value
            }
        });
    };
    public handleTypeChange = (e:any) => {
        this.setState({
            apartments:{
                ...this.state.apartments,
                type: e.target.value
            }
        });
    }
    public handleDescriptionChange = (e:any) => {
        this.setState({
            apartments:{
                ...this.state.apartments,
                description: e.target.value
            }
        });
    }

    public handleSubmit(e:any){
        this.props.onSubmit(this.state.apartments);
    } 

         
    render(){
            return (
                <form onSubmit={this.handleSubmit} className="form-group col-6 container">
                  <h1>Utwórz fakture</h1>
                  <div>
                      <label className="col-lg-2 offset-xs-1" >City</label>
                      <input placeholder={'add city'} value={this.state.apartments.city} onChange={this.handleCityChange} ></input>
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Street</label>
                      <input  placeholder={'add street'} value={this.state.apartments.street} onChange={this.handleStreetChange}></input>
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Property</label>
                      <input placeholder={'add property'} value={this.state.apartments.property} onChange={this.handlePropertyChange} ></input>
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Apartment</label>
                      <input placeholder={'add apartment'} value={this.state.apartments.apartment}  onChange={this.handleApartmentChange}></input>
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Price</label>
                      <input placeholder={'add price'} value={this.state.apartments.price} onChange={this.handlePriceChange} ></input>
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Type</label>
                      <input placeholder={'add type'} value={this.state.apartments.type} onChange={this.handleTypeChange} ></input>
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Description</label>
                      <input placeholder={'add description'} value={this.state.apartments.description} onChange={this.handleDescriptionChange} ></input>
                    </div>
                    <div>
                        <button color="info" className="col-lg-2 offset-xs-1" type="submit" id={"buttonSend"} >Wyślij</button>
                    </div>
                </form>
            )
          }
}
    export default CreateAd