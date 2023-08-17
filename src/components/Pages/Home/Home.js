import React from 'react';
import ActivesInitial from './Actives';
import WidgetTradingView from './WidgetTradingView';
// import Card from './components/layout/Card';

// import Primeiro from './components/basicos/Primeiro';
// import ComParametro from './components/basicos/ComParametro';
// import Fragment from './components/basicos/Fragment';
// import Aleatorio from './components/basicos/Aleatorio';
// import Familia from './components/basicos/Familia';
// import FamiliaMembro from './components/basicos/FamiliaMembro';
// import ListaAlunos from './components/repeticao/ListaAlunos';
// import Produtos from './components/repeticao/Produtos';
// import ParOuImpar from './components/condicional/ParOuImpar';
// import UsuarioInfo from './components/condicional/UsuarioInfo';
// import DiretaPai from './components/comunicacao/DiretaPai';
// import IndiretaPai from './components/comunicacao/IndiretaPai';
// import Input from './components/formulario/Input';
// import Contador from './components/contador/Contador';

function Home() {

  return(
    <div className="Home-general">

        <WidgetTradingView></WidgetTradingView>
        <ActivesInitial></ActivesInitial>

        {/* <Card title="Contador" color="gray">
        <Contador numeroInicial={100}></Contador>
        </Card>

        <Card title="Componente controlado - Input" color="yellow">
        <Input></Input>
        </Card>

        <Card title="Comunicação indireta" color="blue">
            <IndiretaPai/>
        </Card>

        <Card title="Comunicação direta" color="red">
            <DiretaPai/>
        </Card>

        <Card title="Renderização condicional" color="purple">
            <ParOuImpar numero={20}/>
            <UsuarioInfo usuario={{ nome: 'Renan'}}/>
            <UsuarioInfo usuario={{ email: 'ren@an.com'}}/>
        </Card>

        <Card title="Tabela de produtos" color="gray">
            <Produtos/>
        </Card>

        <Card title="Lista de alunos" color="gray">
            <ListaAlunos/>
        </Card>

        <Card title="Componente com filhos" color="orange">
            <Familia sobrenome="Magrao">
                <FamiliaMembro nome="Renan"/>
                <FamiliaMembro nome="Ana"/>
                <FamiliaMembro nome="Gustavo"/>
            </Familia>
        </Card>

        <Card title="Número aleatório" color="#0f0">
            <Aleatorio min={1} max={20}/>
        </Card>

        <Card title="Fragmento" color="red">
            <Fragment />
        </Card>

        <Card title="Com parâmetro" color="yellow">
            <ComParametro
                titulo="Parametros"
                nomeUser="Matheus"
                subtitulo="Subtitle parametros"
                age={19} />
        </Card>

        <Card title="Primeiro componente" color="purple">
            <Primeiro></Primeiro>
        </Card> */}
    </div>
  )
}

export default Home;