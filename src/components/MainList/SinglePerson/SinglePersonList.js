import React from "react"
import style from "./SinglePerson.module.scss"

const SinglePersonList = (props) => {

    let date = new Date(props.dob)
    let day = date.getDay() + 1
    let mont = date.getMonth() + 1
    let year = date.getFullYear()



    return (
        <div className={style.wrap}>
            {props.gender === "female" ? <div className={style.female}>
                <div className={style.image}>
                    <img src={props.img} />
                </div>

                <div>
                    <div>
                        {`${props.title}    
                    ${props.firstName}       
                    ${props.lastName}`}
                    </div>
                    <div>
                        {props.email}
                    </div>
                    <div>
                        {day}.{mont}.{year}
                    </div>

                </div>

            </div> : <div className={style.wraper}>
                    <div className={style.image}>
                        <img src={props.img} />
                    </div>

                    <div>
                        <div>
                            {`${props.title}    
                    ${props.firstName}       
                    ${props.lastName}`}
                        </div>
                        <div>
                            {props.email}
                        </div>
                        <div>
                            {day}.{mont}.{year}
                        </div>

                    </div>

                </div>}

        </div>




    )

}
export default SinglePersonList