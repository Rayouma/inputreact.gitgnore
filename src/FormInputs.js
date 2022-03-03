import React, { Component } from 'react';


export default class FormInputs extends Component {
state={

    nom:'',
    Age:'',
    Ville:'',
    Adress: '',
    items:[]
}
onChange=(event)=>{

this.setState({
[event.target.name]:event.target.value


});
//console.log(this.state.nom);

}
onSubmit=(event)=>{
    event.preventDefault();
    this.setState({
        nom:'',
        Age:'',
        Ville:'',
        Adress:'',
        items:[...this.state.items,{nom:this.state.nom,Age:this.state.Age,
        Ville:this.state.Ville,Adress:this.state.Adress}]

    });
}
renderCard=()=>{
    return this.state.items.map((item,index)=>{

       return(


        <div className='card' key={index}>
        <div className='card-body'>
         <h2>{item.nom}</h2>
        <hr/>
        <p>
         Tu as {item.Age} ans.

        </p>
        <p>tu vis à {item.Ville} </p>
        <p>ton Adress  est  {item.Adress}.</p>

        </div>
        
        </div>
       )



    })
}



    render() {
        return (
            <div>
            <div className='card my-3'>
                <div className='card-header'>Ajouter une personne </div>

                 <div className='card-body'>
                   <form onSubmit={this.onSubmit} >

                   <div className='form-group'>
                    <label htmlFor='nom'>Nom</label>
                     <input type='text'
                     className='form-control  form-control-lg'
                     name='nom'
                     onChange={this.onChange}
                     value={this.state.nom}
                     
                     />

                    </div>

                    <div className='form-group'>
                    <label htmlFor='Age'>Age</label>
                     <input type='text'
                     className='form-control form-control-lg'
                     name='Age'
                     onChange={this.onChange}
                     value={this.state.Age}/>

                    </div>


                    <div className='form-group'>
                    <label htmlFor='Ville'>Ville</label>
                     <input type='text'
                     className='form-control form-control-lg'
                     name='Ville'
                     onChange={this.onChange}
                     value={this.state.Ville}/>

                    </div>

                    <div className='form-group'>
                    <label htmlFor='Adress'>Adress</label>
                     <input type='text'
                     className='form-control form-control-lg'
                     name='Adress'
                     onChange={this.onChange}
                     value={this.state.Adress}/>

                    </div>
                    <button className='btn btn-primary btn-block'>Créer votre fiche!</button>




                   </form>





                     </div>  

               


             </div>
             {this.renderCard()}


            </div>
        );
    }
}


