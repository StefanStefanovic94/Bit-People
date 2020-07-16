import React from 'react'
import SinglePersonList from './SinglePerson/SinglePersonList'
import style from './Main.module.scss'
import GridList from '../GridList/GridList'
import Counter from '../Counter/Counter'

class MainList extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        if(this.props.persons.length){
            return(
                
             <div className={style.main}>
                 <Counter persons={this.props.persons}/>
                {this.props.persons.map((person)=>{
                    if(this.props.view){
                        console.log(this.props.persons)
                     return<SinglePersonList 
                    firstName={person.name.first}
                    lastName={person.name.last}
                    title={person.name.title}
                    dob={person.dob.date}
                    email={person.email}
                    img={person.picture.thumbnail}
                    gender={person.gender}/>}

                    else{ 
                    return<GridList 
                        firstName={person.name.first}
                        lastName={person.name.last}
                        title={person.name.title}
                        dob={person.dob.date}
                        email={person.email}
                        img={person.picture.large}
                        gender={person.gender}/>
                    }
                 })}


                
            </div>)

        }else{
        return this.props.users.length ? <h2>nothing to found</h2> : <h2>looooading</h2>}
    }
}

export default MainList