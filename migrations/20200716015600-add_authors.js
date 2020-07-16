'use strict';
const AUTHORS = [
  {
    firstName: 'Михаил',
    lastName: 'Булгаков',
    info: 'Однажды пришел в редакцию газеты в шубе, под которой была только пижама.',
    birthday: new Date('1891-05-15T03:24:00'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Сергей',
    lastName: 'Довлатов',
    info: 'Поклонницам позволял приносить спиртное, пряники и молча слушать.',
    birthday: new Date('1941-09-03T03:24:00'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Венедикт',
    lastName: 'Ерофеев',
    info: 'Работал в Таджикистане в должности «лаборанта по борьбе с окрыленным кровососущим гнусом».',
    birthday: new Date('1938-10-24T03:24:00'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Алексей',
    lastName: 'Толстой',
    info: 'Невеста Толстого перешла ради него из иудаизма в православие, но свадьба не состоялась.',
    birthday: new Date('1883-01-10T03:24:00'),
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

const BOOKS = [[{
  title: 'Мастер и маргарита',
  info: 'роман, 1929—1940, в СССР опубликован в 1966—1967 годах, второй вариант в 1973 году, окончательный вариант в 1990 году',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Собачье сердце',
  info: 'повесть, 1925, в СССР опубликована в 1987 году',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Белая гвардия',
  info: 'роман, 1922—1924',
  createdAt: new Date(),
  updatedAt: new Date()
}], [{
  title: 'Соло на ундервуде: Записные книжки',
  info: 'Париж: Третья волна, 1980',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Марш одиноких',
  info: 'Холиок: New England Publishing, 1983',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Ремесло: Повесть в двух частях',
  info: 'Анн-Арбор: Ardis Publishing, 1985',
  createdAt: new Date(),
  updatedAt: new Date()
}], [{
  title: 'Записки психопата',
  info: '1956—1958, опубликованы в сокращённом виде в 2000 году, в полном виде — в 2004',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Москва — Петушки',
  info: 'поэма в прозе, 1970; опубликована в Израиле в 1973, в СССР — в 1988—1989',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Василий Розанов глазами эксцентрика',
  info: 'эссе, 1973, опубликовано в СССР в 1989',
  createdAt: new Date(),
  updatedAt: new Date()
}], [{
  title: 'Гиперболоид инженера Гарина',
  info: 'фантастический роман А. Н. Толстого, завершённый к 1927 году.',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Аэлита',
  info: 'фантастический роман (1923 год) и его переработка в повесть для юношества (1937 год) Алексея Николаевича Толстого о путешествии землян на Марс.',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  title: 'Пётр Первый ',
  info: 'незаконченный исторический роман А. Н. Толстого, над которым он работал с 1929 года до самой смерти.',
  createdAt: new Date(),
  updatedAt: new Date()
}]];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const author = await queryInterface.bulkInsert('authors', AUTHORS, {returning: true})
    const authorIds = author.map(async (a, i) => {
      const books = BOOKS[i].map(b => {
        return {
          ...b,
          authorId: a.id
        }
      })
      await queryInterface.bulkInsert('books', books)
    });
  },

  down: (queryInterface, Sequelize) => {}
};
