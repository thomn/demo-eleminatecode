import {square} from './math'

if (process.env.NODE_ENV === 'dev') {
    console.log('calculating the squareroot of 10')
}

console.log(square(10))