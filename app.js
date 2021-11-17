import axios from 'axios'; 
import { createRequire } from 'module';


const buttonElement = document.getElementById('quoteBtn'); 
const ulElement = document.getElementById('quoteList'); 


const getQuote = async () => {
    try {  
        const response = await axios.get(`https://animechan.vercel.app/api/random`)
        console.log(response.data.quote); 
        return response.data.quote


    }
    catch (err) {
        console.log(err); 

    }
}

const createQuote = async () => {
    const quoteElement = await getQuote()
    const liElement = document.createElement('li'); 
    liElement.append(quoteElement); 
    ulElement.appendChild(liElement); 
    

}

buttonElement.addEventListener('click', createQuote);