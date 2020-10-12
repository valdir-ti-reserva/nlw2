import React from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';


import './styles.css';

function TeacherList (){
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form id="search-teachers">
          
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
          
          <Input label="Hora" name="time" type="time" />

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>

    </div>
  )
}

export default TeacherList;