import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
  return (
    <article className="teacher-item">
          
          <header>
            <img src="https://avatars1.githubusercontent.com/u/11434239?s=460&u=83d59b5961df387b6105f7e3432f832f67080fd7&v=4" alt="Valdir Silva"/>
            <div>
              <strong>Valdir Silva</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><br/>            
            Ratione eaque dolor minima voluptatibus. Deserunt asperiores maxime nulla! 
            Quibusdam vitae corporis, odio quae natus dolor, magnam ipsum ut maxime repellendus quas!
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="ícone Whatsapp"/>
              Entrar em contato
            </button>
          </footer>

        </article>
  );
}

export default TeacherItem;