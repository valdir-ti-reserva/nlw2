import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function TeacherForm (){
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>

        <fieldset>
          <legend>Seus Dados</legend>
          <Input label="Nome Completo" name="name" autoComplete="off" />
          <Input label="Avatar" name="avatar" autoComplete="off"/>
          <Input label="WhatsApp" name="whatsapp" autoComplete="off"/>          
        </fieldset>
        
        <fieldset>
          <legend>Sobre a aula</legend>
          <Input label="Matéria" name="subject" autoComplete="off" />
          <Input label="Custo da sua hora por aula (em R$)" name="cost" autoComplete="off"/>
        </fieldset>
        
        <fieldset>
          <legend>Horários disponíveis</legend>
          <Input label="Nome Completo" name="name" autoComplete="off" />
          <Input label="Avatar" name="avatar" autoComplete="off"/>
          <Input label="WhatsApp" name="whatsapp" autoComplete="off"/>          
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Warning Icon"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;