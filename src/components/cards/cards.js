import React from 'react';
import './public/css/app.css'

// exo 5 creation de cards.
// function Cards 6 param. 
//     nom,age,prenom,bgcolor,height,width.
//       bgcolor => changement de la couleur div
//       height/width => taille de celle ci. 

// but : creation de 3 cards. 1 de vous-meme, de votre (best) coach et du head coach Elias

const cards = ({_nom, _prenom, _age, _bgcolor, _height, _width, _img}) => {
    let classes = `${_width} ${_height} ${_bgcolor} text-center`;
    let classesBody = `${_bgcolor} w-full text-white`;
  return (
    
    <div className={classes}>
        <div className='w-full'>
            <img src={_img} alt={_prenom} className='w-full h-60'/>
        </div>
        <div className={classesBody}>
            <h3 className='text-2xl font-bold'>{_prenom}</h3>
            <table className='w-full'>
                <tr className='border border-black'>
                    <td>Nom</td>
                    <td>{_nom}</td>
                </tr>
                <tr className='border border-black'>
                    <td>Prénom</td>
                    <td>{_prenom}</td>
                </tr>
                <tr className='border border-black'>
                    <td>Age</td>
                    <td>{_age}</td>
                </tr>
            </table>
        </div>
    </div>
    
  )
}

export default cards