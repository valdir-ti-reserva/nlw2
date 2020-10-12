import React from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


import './styles.css';

function TeacherList (){
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form id="search-teachers">
          
          <Input label="Matéria" name="subject" />          
          <Input label="Dia da Semana" name="week_day" />          
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