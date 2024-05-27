import "./perfil.css"
import perfil from '../../img/Icons/perfil.svg'
import deleteicon from "../../img/Icons/TrashCan.png"
import {Link} from "react-router-dom"
import editicon from "../../img/Icons/Pencil.svg"

const Perfil = () => {
  return (
    <div className="Perfil">
      <div className='divPerfil'>
        <div className="perfilFuncoes">
          <Link className="linkPerfil" to="/">
            <img className="perfilIcon" src={perfil}/>
            <p className="fonte-subtitulos">Conta</p>
         </Link>
        <hr />
        <Link className="linkDelete" to="/">
            <img className="deleteIcon" src={deleteicon}/>
            <p className="fonte-subtitulos">Deletar Conta</p>
        </Link>
        </div>
        <div className="infoDiv">

          <div className="info1">            
            <div className="topinfo">
              <p className="fonte-05">Informações Pessoais</p>

              <Link className="linkEditarPessoais">  
                <img className="editIcon" src={editicon}/>
                <p className="fonte-editar">Editar</p>
              </Link>
            </div>
            
            <div className="pessoalinfo">
              <div>
                <p className="fonte-subtitulos">Nome</p>
                <p className="fonte-gerais">Fulano</p>
              </div>

              <div className="sobrenomediv">
                <p className="fonte-subtitulos">Sobrenome</p>
                <p className="fonte-gerais">de Tal</p>
              </div>
            </div>

            <div className="pessoalinfo2">
              <div>
                <p className="fonte-subtitulos">Email</p>
                <p className="fonte-gerais">fulano@email.com</p>
              </div>

              <div className="phonediv">
                <p className="fonte-subtitulos">Telefone</p>
                <p className="fonte-gerais">(11)4002-8922</p>
              </div>
            </div>
          </div>

          <div className="info2">
            <div className="topinfo">
              <p className="fonte-05">Seu Plano</p>

              <Link className="linkEditarPessoais">  
                <img className="editIcon" src={editicon}/>
                <p className="fonte-editar">Editar</p>
              </Link>
            </div>

            <div className="planoinfo">
              <div>
              <p className="fonte-05">Plano Atual</p>
              <p className="fonte-plano">Bronze</p>
              </div>

              <div>
              <p className="fonte-05">Valor</p>
              <p className="fonte-preco">R$55,90</p>
              </div>
            </div>

            <div className="planoinfo2">
              <div>
                <p className="fonte-subtitulos">Benefícios</p>
                <ul className="beneficioslista">
                  <li className="fonte-gerais">Acesso a mais de 20 redes de academia</li>
                  <li className="fonte-gerais">Avaliação física semestral</li>
                  <li className="fonte-gerais">Acesso a uma modalidade escolhida</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Perfil;