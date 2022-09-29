'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')
const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

// CRUD
//Create
const tempCliente = {
    nome: 'matue',
    email: 'mattasdfc@gmail.com',
    celular: '349831234177',
    cidade: 'Patos de Minas'

}
const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'));
    console.log(db_client)
    db_client.push(client)
    localStorage.setItem('db_client', JSON.stringify(db_client))
    
}

//Eventos

document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)