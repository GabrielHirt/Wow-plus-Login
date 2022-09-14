/*import React from "react";*/
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import {Modal} from '../../components/Modal';
import '../../components/App.css';

import React, { useState } from "react";
/*import {Header} from './components/Header';
import {Main} from './components/Main';*/


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();



  const [isModalVisible, setModalVisible] = useState(false);
  
  

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        nick: ''
      });
    
      const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      });
    
      //Receber os dados do formulário
      const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });
    
      //Enviar os dados para o back-end
      const addUser = async e => {
        e.preventDefault();
    
        if(!validate()) return;
    
        const saveDataForm = true;
    
        if (saveDataForm) {
          setStatus({
            type: 'success',
            mensagem: "Usuário cadastrado com sucesso!"
          });
          setUser({
            name: '',
            email: '',
            password: '',
            nick: ''
          });

          setModalVisible(true) /*Mostrará o modal após as condições para cadastro passarem*/

        } else {
          setStatus({
            type: 'error',
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
          });
        }
      }
    
      function validate(){
        if(!user.name) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'});
        if(!user.nick) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nickname!'});
        if(!user.email) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!'});
        if(!user.password) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo senha!'});
        if(user.password.length < 6) return setStatus({type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!'});
    
        return true;
      }

    const [isCircle, setIsCircle] = useState(true);















  return (
    <C.Container>

      {/*
      <C.Title>Home</C.Title>
      */}

      <div>
        <header>
        <div className="flex">
            <div className="img_wow">
            <div className="logo battle"></div>
            </div>
            <div className="logo">
            </div>
        </div>
            <div className="align">
                <p className="blink">Bem vindo!</p>
                <span className="home button-style" onClick={() => setIsCircle(!isCircle)}>HOME / CADASTRO</span>
                <div className="selection">
                   {/* <span className="nacional-" onClick={() => setIsCircle(!isCircle)}>CADASTRO</span>*/}
                </div>
            </div>
            <div className="sair" onClick={() => [signout(), navigate("/")]}>Sair</div>
    </header>
    <main className={isCircle ? "previous" : "next"}>
        <div className="sections">
            <section className="info">           
                <div className="img"></div>
                <div className="info-area">
                    <div className="info1">
                      <div id="root">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/s4gBChg6AII"
                       title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;
                       clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen></iframe>
                      </div>
                    </div>
                    <div className="info2">
                    <form className="b7validator">
                            <label>
                                Seu e-mail:<br/>
                                <input type="text" name="email" data-rules="required|email" />
                            </label>
                            <label>
                                Sua senha:<br/>
                                <input type="password" name="password" data-rules="min=4" />
                            </label>
                            <label>
                                <input type="submit" value="Login" />
                            </label>
                            <a href="">Não possui uma conta?< br/> Clique abaixo!</a><br />
                            <br />
                            <span className="create-account" onClick={() => setIsCircle(!isCircle)}>INCREVA-SE</span>
                        </form>
                    </div>
                </div>
            </section>
            <section className="nacional">
                <section className="left-side">
                {status.type === 'success' ? <p className="noerror" style={{ color: "#00FF00"}}>{status.mensagem}</p> : ""}
                {status.type === 'error' ? <p className="error" style={{ color: "#FFFF00" }}>{status.mensagem}</p> : ""}
              <div className="txt">
                <h1>Infinitas aventuras em três formas diferentes de World of Warcraft</h1>
                <p>Entre em um mundo de mitos, magia e aventuras sem fim junto de milhões de jogadores. Com uma única assinatura, você ganha acesso a World of Warcraft e WoW Classic, incluindo o Burning Crusade Classic e os mais novos reinos da Temporada de Maestria.
                  Wrath of the Lich King Classic™ chega às 19h de 26 de setembro (horário de Brasília). Para comemorar, você pode ganhar a Protosserpe Ninhálgida no jogo moderno concluindo a experiência do Cavaleiro da Morte no Classic. Embora os Cavaleiros da Morte tenham a limitação de um por servidor e exijam um personagem no nível 55 para ser criados, no Wrath Classic vamos retirar o requisito para o primeiro Cavaleiro da Morte* do jogador. Assine já e aproveite o poder do Cavaleiro da Morte!
                </p>
              </div>



                </section>
                <section className="right-side">
                <h1>Cadastrar Usuário</h1>
                                <form action="/cad" method="POST" onSubmit={addUser} className="b7validator">
                                    <label>Nome*: </label>
                                    <input type="text" name="name" placeholder="Nome completo do usuário" onChange={valueInput} value={user.name} /><br /><br />

                                    <label>Nickname*: </label>
                                    <input type="text" name="nick" placeholder="Nome completo do nickname" onChange={valueInput} value={user.nick} /><br /><br />

                                    <label>E-mail*: </label>
                                    <input type="email" name="email" placeholder="Melhor e-mail do usuário" onChange={valueInput}  value={user.email} /><br /><br />

                                    <label>Senha*: </label>
                                    <input type="password" name="password" placeholder="Senha para acessar o sistema" autoComplete="on" onChange={valueInput} value={user.password} /><br /><br />

                                    * Campo obrigatório<br /><br />

                                    <button type="submit">Cadastrar</button>

                                    <div className="App">

                                    {/*<button onClick={() => setModalVisible(true)}>Open modal</button>*/}
                                    {isModalVisible ? (
                                    <Modal onClose = {() => setModalVisible(false)}>
                                      <h2> Informações do Jogador</h2>
                                      <p>NOME: {user.nome}</p><br />
                                      <p>NICKNAME:</p><br />
                                      <p>SENHA:</p><br />
                                      <p>E-MAIL:</p>
                                      <div className="noerror">Usuário cadastrado com sucesso!</div><br />
                                    </Modal>
                                     ) : null}

                                    </div>


                                </form>
                </section>
            </section>
        </div>
    </main>
    </div>
    
      {/*
      <Button className='sair' Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
      */}

    </C.Container>
  );
};

export default Home;