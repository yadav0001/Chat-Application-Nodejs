const socket = io()
const totalNumber = document.querySelector('#number-online')

socket.on('wantstojoin', (totalUsers) => totalNumber.innerHTML=totalUsers)

