document.addEventListener('DOMContentLoaded', () => {
    async function handleRegister(e) {
        e.preventDefault();

        console.log("Hola");
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;       

        try {
            const res = await fetch('http://https://allusersfront.onrender.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, email, password})
            });

            const data = await res.json()
            if (res.status === 200) {
                alert('Registro exitoso')
            }else {
                alert(`Error: ${data.msg}`)
            }
        }catch(error){
            console.error('Error:', error)
            alert('Error de regisro de usuario')
        }
    }  
    async function handleLogin(e) {
        e.preventDefault()
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;        

    try {
        const res = await fetch('http://https://allusersfront.onrender.com/api/auth/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })

        const data = await res.json()
        if (res.status === 200) {
            alert('Login exitoso')
        }else {
            alert(`Error: ${data.msg}`)
        }
    }catch(error){
        console.error('Error:', error)
        alert('Error de inicio de sesión')
        }
    }

    async function handleClient(e) {
        e.preventDefault();            
    
        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('clientEmail').value;
        const birthday = document.getElementById('birthday').value;       
    
        try {
            const res = await fetch('http://https://allusersfront.onrender.com/api/contact/send',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, lastname, email, birthday})
            });
              
            const data = await res.json()
            console.log('Response status:', res.status);
            console.log('Response data:', data);
            console.log(res);
            console.log('Hola2');
                
            if (res.status === 200) {
                alert('Ingreso de datos exitoso')
                console.log('Hola');
                
            }else {
                alert(`Error: ${data.msg}`)
            }
        }catch(error){
            console.error('Error:', error)
            alert('Error al ingresar los datos')
        }
    }

    document.getElementById('registerForm').addEventListener('submit', handleRegister)
    document.getElementById('loginForm').addEventListener('submit', handleLogin)
    document.getElementById('clientForm').addEventListener('submit', handleClient)    
});
