import * as React from 'react'
import { Card, Button } from 'react-bootstrap';
import {allApartments, deleteApartmen, deleteAllApartments} from './Conector';
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
    public deleteAll(){
        deleteAllApartments().then(resp => { 
            this.getAllApartments();
        })
    }

    componentDidMount(){
        this.getAllApartments()
    }

    render(){
        const {apartments} = this.state
        return(
            <div>
                {apartments.length > 0 ? 
                    <div><Button variant="danger" className="viewOfApartments--buttonDanger" onClick={this.deleteAll}>Delete All</Button> 
                    <Card.Link  href={'/create'} className="viewOfApartments--buttonPrimary viewOfApartments--buttonPrimary__localizationButton">Create New</Card.Link> </div>
                    :
                    <Card.Link  href={'/create'} className="viewOfApartments--buttonPrimary viewOfApartments--buttonPrimary__localizationButton">Create New</Card.Link>
                }
            <div className={"viewOfApartments--groupCard"}>
                
            {apartments.map((apartment: ExtendedApartmentModel, key) =>{
            return (
                <Card className={"viewOfApartments--singleCard"} key={apartment.id}>
                    <Card.Body >
                        <Card.Title>Apartment</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> {apartment.description}</Card.Subtitle>
                        <Card.Text>
                          City: {apartment.city}
                        </Card.Text>
                        <Card.Text>Price: {apartment.price}</Card.Text>
                        <Card.Link className="viewOfApartments--buttonPrimary viewOfApartments--buttonPrimary__localInCard" href={`/apartament/${apartment.id}`}>Precise description</Card.Link>
                        <Button variant="danger" onClick={()=>{this.delete(apartment.id)}}>Delete</Button>
                    </Card.Body>
                </Card>
            )
            })
        }
            </div>
            </div>
        )
    }
}

export default ApartmentView