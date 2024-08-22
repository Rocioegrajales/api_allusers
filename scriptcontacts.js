document.addEventListener('DOMContentLoaded', () => {    
    async function handleClient(e) {
    e.preventDefault();            

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const birthday = document.getElementById('birthday').value;

    try {
        const res = await fetch('http://localhost:5000/api/contact/send',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, lastname, email, birthday})
        });

        const data = await res.json()
        console.log('Response status:', res.status);
        console.log('Response data:', data);
        
        if (res.status === 200) {
            alert('Ingreso de datos exitoso')
        }else {
            alert(`Error: ${data.msg}`)
        }
    }catch(error){
        console.error('Error:', error)
        alert('Error al ingresar los datos')
    }
}

    document.getElementById('clientForm').addEventListener('submit', handleClient)

});
