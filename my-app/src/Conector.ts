 import { Draft, ExtendedApartmentModel } from "./ModelApartament";

export function allApartments(){ 
    return fetch(`${process.env.REACT_APP_MY_API}/getAll`)
            .then(resp => resp.json())
}

export function getApartmen(id:number){
    return fetch(`${process.env.REACT_APP_MY_API}/get/${id}`)
            .then(resp => resp.json())
}

export function createNew(data: Draft){
    return fetch(`${process.env.REACT_APP_MY_API}/create`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }  
    })
      .then(res => res.json())
      .then(res => {
      })
      .catch(error => 
         console.log("Błąd: ", error));
    }
export function deleteApartmen(id:number){
    return fetch(`${process.env.REACT_APP_MY_API}/delete/${id}`)
    .then(resp => resp.json())
}

export function deleteAllApartments(){
    return fetch(`${process.env.REACT_APP_MY_API}/deleteAll`)
    .then(resp => resp.json())
}

export function updateAdvertisement(updateData: ExtendedApartmentModel, id:number){
    return fetch(`${process.env.REACT_APP_MY_API}/update/${id}`,{
        method: 'POST',
        body: JSON.stringify(updateData),
        headers: {
            'Content-Type': 'application/json',
        }  
    })
      .then(res => res.json())
      .catch(error => 
         console.log("Błąd: ", error));
}