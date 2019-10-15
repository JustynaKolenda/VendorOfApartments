import * as React from 'react'
import { Card, Button } from 'react-bootstrap';
import {allApartments, deleteApartmen} from './Conector';
import { ExtendedApartmentModel } from './ModelApartament';

type ApartmentS = {
    apartments: Array<ExtendedApartmentModel>
  }

export class ApartmentView extends React.Component<any, ApartmentS> {
    constructor(props:any){
        super(props)
        this.state = {
            apartments: []
        }
        this.getAllApartments = this.getAllApartments.bind(this);
        this.delete = this.delete.bind(this);
    }

    public getAllApartments(){
        allApartments().then(resp => { 
            this.setState({
                apartments: resp.data
            })
        })
    }

    public delete(id:number){
        deleteApartmen(id).then(resp => { 
            this.getAllApartments();
        })
    }

    componentDidMount(){
        this.getAllApartments()
    }

    render(){
        console.log(this.state.apartments)
        const {apartments} = this.state
        return(
            <div>
            {apartments.map((apartment: ExtendedApartmentModel, key) =>{
            return (
                <Card style={{ width: '18rem' }} key={apartment.id}>
                    <Card.Body >
                        <Card.Title>Apartments</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> {apartment.description}</Card.Subtitle>
                        <Card.Text>
                            {apartment.city}
                            {apartment.price}
                        </Card.Text>
                        <Card.Link href={`/apartament/${apartment.id}`}>Precise description</Card.Link>
                        <Button onClick={()=>{this.delete(apartment.id)}}>Delete</Button>
                    </Card.Body>
                </Card>
            )
            })
        }
            </div>
        )
    }
}

export default ApartmentView