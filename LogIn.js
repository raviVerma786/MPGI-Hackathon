import react, { useState } from 'react';
// import  ReactDOM from 'react-dom';
const LogIn = () =>{
    
    const [finalName,setFName] =useState({
        fname:'',
        lname:'',
        email:'',
    });
    const func = (event) =>{
        const name=event.target.name;
        const value=event.target.value;
        setFName((preValue)=>{return {...preValue,[name]:value} }) 
    }
    
    const submit = (event) =>{
        event.preventDefault();
        alert('Form Submitted')
    }
    return(
        <>
        <div className="box">
	<form onSubmit={submit}>
		<span className="text-center">Hello <br/><p>{finalName.fname} {finalName.lname}<br/><span>{finalName.email}</span></p></span>
	<div className="input-container">
		<input type="text" name='fname' onChange={func} value={finalName.fname} required=""/>
		<label>First Name</label>		
	</div>
    <div className="input-container">
		<input type="text" name='lname' onChange={func} value={finalName.lname} required=""/>
		<label>Last Name</label>		
	</div>
	<div className="input-container">		
		<input type="text" name='email'  onChange={func} value={finalName.email} required=""/>
		<label>Email</label>
	</div>
		<button type="submit" className="btn">submit</button>
</form>	
</div>
        
        </>
    );
}

export default LogIn;