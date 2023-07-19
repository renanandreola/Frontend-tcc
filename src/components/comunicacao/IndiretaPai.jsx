import React, {useState} from "react";
import IniretaFilho from './IndiretaFilho'

 export default props => {
     const [name, setNome] = useState('?');
     const [age, setAge] = useState(0);
     const [isNerd, setIsNerd] = useState(false);

    function fornecerInformacoes(nome, idade, nerd) {
        console.log(nome, idade, nerd);
        setNome(nome);
        setAge(idade);
        setIsNerd(nerd);
    }

     return (
         <div>
           <div>
               <span>{name} </span>
               <span>{age} </span>
               <span>{isNerd ? 'Verdadeiro' : 'Falso'}</span>
               <br/>
           </div>

           <IniretaFilho quandoClicar={fornecerInformacoes}></IniretaFilho>
         </div>
     )
 }