import React, {useState} from 'react'

export default function Forms() {
    const [input, setInput] = useState({
        firstName: '',
        email: '',
      });
        const handleChange =(e) => {
            setInput({...input, [e.target.name]: e.target.value});
            console.log(input);
        };
        const handleSubmit =(event) => {
           event.preventDefault(); 
           if (input.firstName && input.email) {
                alert('Thank you ' + input.firstName);
           } else {
               alert ('Please fill the form correctly');
           }
        };
    
    return (
        <div>
            <form>
            <input 
            type="text" 
            style={{ border: '2px solid red'}}
            onChange= {(e) => handleChange(e)}
            placeholder="name"
            name="firstName"
            />
            <input 
            type="email" 
            style={{ border: '2px solid red'}}
            onChange= {(e) => handleChange(e)}
            placeholder="email"
            name="email"
            />
            <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
