import React from 'react'
import style from './Header.module.scss'
import {FiRefreshCcw} from "react-icons/fi"
import {BsFillGrid3X3GapFill} from "react-icons/bs"
import {AiOutlineUnorderedList} from "react-icons/ai"



class Header extends React.Component{
    constructor(props){
        super(props)
          }


    render(){
        return(
            <div className={style.wraper}>
                <div>
                    <h2 className={style.title}>Bit Persons</h2>
                </div>
                <div  className={style.wrapIcons}>
                    <span onClick={this.props.refresh} className={style.refresh}><FiRefreshCcw/></span>
                    {this.props.view?
                     <span onClick={this.props.changeView}><AiOutlineUnorderedList/></span>:
                    <span onClick={this.props.changeView}><BsFillGrid3X3GapFill/></span>
                    }


                    
                </div>
             </div>

        )
    }
}

export default Header