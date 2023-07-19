import React from "react";
import DiretaFilho from './DiretaFilho'

 export default props => {
     return (
         <div>
             <DiretaFilho name="Matheus" age={20} nerd={true}></DiretaFilho>
             <DiretaFilho name="Gabriel" age={17} nerd={false}></DiretaFilho>
         </div>
     )
 }