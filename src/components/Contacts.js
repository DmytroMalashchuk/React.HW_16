import React, {Component} from "react";
import Contact from "./Contact"
import "./contacts.css"
class Contracts extends Component{
    state = {
        contacts:[{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666"
        }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }],
        search: ''
    }
    handleSearchChange = (e) => {
        this.setState({search: e.target.value})
        this.setState({contacts: this.state.contacts.filter(({firstName, lastName})=>
            firstName.toLowerCase().includes((this.state.search).toLowerCase())||lastName.toLowerCase().includes((this.state.search).toLowerCase())
        )})
    }
    render(){
        return(
            <div className="background-contacts">   
                <h1 className="logo">Контакты</h1>
                <p>поиск:<input className="input" value={this.state.search} onChange={this.handleSearchChange}></input></p>
                <div>{this.state.contacts.map((contact)=><Contact{...contact}/>)}</div>
            </div>
        )
    }
}
export default Contracts;