import React from "react";
import style from "./GridList.module.scss";

const GridList = (props) => {
  let date = new Date(props.dob);
  let day = date.getDay() + 1;
  let mont = date.getMonth() + 1;
  let year = date.getFullYear();

  return (
    <div className={style.wraper}>
      {props.gender === "female" ? <div className={style.color}>
        <div className={style.image}>
          <img src={props.img} />
        </div>

        <div className={style.text}>
          <div>
            {`${props.title}    
                    ${props.firstName}       
                      ${props.lastName}`}
          </div>
          <div>{props.email}</div>
          <div>
            {day}.{mont}.{year}
          </div>
        </div>
      </div> : <div className={style.secondColor}>
          <div className={style.image}>
            <img src={props.img} />
          </div>

          <div className={style.text}>
            <div>
              {`${props.title}    
                    ${props.firstName}       
                      ${props.lastName}`}
            </div>
            <div>{props.email}</div>
            <div>
              {day}.{mont}.{year}
            </div>
          </div>
        </div>}
    </div>




  );
};
export default GridList;
