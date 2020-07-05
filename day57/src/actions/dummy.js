import axios from 'axios'

axios('http://api.open-notify.org/astros.json').then((res)=>{
    console.log(res) 
})