import{link} from 'react-router-dom'

export function Home(){
    return(
        <div>
            <h1> Bem vindo a minha página Home!!🌙</h1>
            <span>  minha primeira página com navegação</span>
            <br/>
            <link to="/">ir para home  </link>
        </div>
    )
}