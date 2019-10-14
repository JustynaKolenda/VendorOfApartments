import * as React from 'react'
import {AppartmentState} from './DeveloperModel'

type ApartmentsString = {
    apartments:Array<AppartmentState>,
  }
type Props={
    //
}

export class ApartmentView extends React.Component<Props, ApartmentsString> {
    constructor(props:any){
        super(props)
        this.getApp = this.getApp.bind(this)
    }

    public getApp(){
        fetch(`REACT_APP_MY_APPY_KEY/getall`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    apartments: resp.results            
            })
        })
    }

    componentDidMount(){
        this.getApp()
    }

    render(){
        return(
            <div>
             {  }
            </div>
        )
    }
}

export default ApartmentView