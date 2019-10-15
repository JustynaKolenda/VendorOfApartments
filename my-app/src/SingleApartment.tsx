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
            console.log(resp)        
        })
    }

    public backToAllList(){
        window.history.forward();
    }

    render(){
        console.log(this.state.apartment)
        const {apartment} = this.state
        return(
            <div>
                <Card style={{ width: '18rem' }} key={apartment.id}>
                    <Card.Body >
                        <Card.Title>Apartment</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> {apartment.description}</Card.Subtitle>
                        <Card.Text>
                            {apartment.city}
                        </Card.Text>
                        <Card.Text>
                            {apartment.price}
                        </Card.Text>
                        <Card.Link href={`/apartament/${apartment.id}`}>Update</Card.Link>
                        <Card.Link onClick={this.backToAllList} href="/">Back</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default SingleApartment