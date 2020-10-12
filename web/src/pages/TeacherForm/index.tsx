import React from 'react';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
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
          <Textarea name="bio" label="Biografia"/>
        </fieldset>
        
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select 
            label="Matéria" 
            name="subject" 
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Português', label: 'Português' },
            ]}
          />
          <Input label="Custo da sua hora por aula (em R$)" name="cost" autoComplete="off"/>
        </fieldset>
        
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>

          <div className="schedule-item">
            <Select 
              label="Dia da Semana" 
              name="week_day" 
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />
            <Input label="Das" name="from" autoComplete="off" type="time"/>
            <Input label="Até" name="to" autoComplete="off" type="time"/>

          </div>
          

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