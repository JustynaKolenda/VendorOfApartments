import * as React from 'react'
import { Card } from 'react-bootstrap';
import {getApartmen} from './Conector';
import { ExtendedApartmentModel } from './ModelApartament';

type Apartment = {
    apartment: ExtendedApartmentModel
  }

export class SingleApartment extends React.Component<any, Apartment> {
    constructor(props:any){
        super(props)
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
        this.getApp = this.getApp.bind(this);
        this.backToAllList = this.backToAllList.bind(this)
    }

    componentDidMount(){
        this.getApp(this.props.match.params.id)
    }   

    public getApp(id:number){
        getApartmen(id).then(resp => { 
            this.setState({
                apartment: resp.data
            })       
        })
    }

    public backToAllList(){
        window.history.forward();
    }

    render(){
        const {apartment} = this.state
        return(
            <div className="singleApartmentView">
                <Card style={{ width: '18rem' }} key={apartment.id}>
                    <Card.Body >
                        <Card.Title>Localization of Apartment</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> {apartment.description}</Card.Subtitle>
                        <Card.Text>
                            City: {apartment.city}
                        </Card.Text>
                        <Card.Text>
                            Street: {apartment.street}
                        </Card.Text>
                        <Card.Text>
                            Property: {apartment.property}
                        </Card.Text>
                        <Card.Text>
                            Apartment: {apartment.apartment}
                        </Card.Text>
                        <Card.Text>
                            Price: {apartment.price}
                        </Card.Text>
                        <Card.Text>
                            Type: {apartment.type}
                        </Card.Text>
                        <Card.Text>
                            Description: {apartment.description}
                        </Card.Text>
                        <Card.Link  className="viewOfApartments--buttonPrimary viewOfApartments--buttonPrimary__localInCard" href={`/update/${apartment.id}`}>Update</Card.Link>
                        <Card.Link  className="viewOfApartments--buttonPrimary viewOfApartments--buttonPrimary__localInCard" onClick={this.backToAllList} href="/">Back</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default SingleApartment