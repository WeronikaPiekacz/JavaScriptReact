
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function List(){
  return (
  <section className='list'>
    <Element/>
    <Element/>
    <Element/>
    <Element/>
    <Element/>
    <Element/>
    <Element/>
    <Element/>
    <Element/>
  </section>
  );
}
const Element = () => {
  return <article className='element'>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><img src={img} alt=""/></div>
    <h2>{title}</h2>
    <h5>{author}</h5>
    </article>;
};
const img  = 'https://purepng.com/public/uploads/thumbnail/purepng.com-simbalion-kinglionking1994epic-musicalwalt-disneyanimation-1701528621920dvmfz.png';
const title = 'Duży';
const author  = 'Lew'
ReactDOM.render(<List/>,document.getElementById('root'));
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
