document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    document.getElementById('result').innerHTML = `
        <h3>User Data</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
});


let err=document.getElementById('error');
let showButton=document.getElementById('showError');

showButton.addEventListener('click',()=>{
    err.style.display='block';
});

let hideButton=document.getElementById('hideError');
hideButton.addEventListener('click',()=>{
    err.style.display='none';
})

let eachNum=document.getElementsByClassName('first')[0];
eachNum.addEventListener('mouseover',()=>{
    eachNum.style.color='blue';
    eachNum.style.backgroundColor='red';  
})

eachNum.addEventListener('mouseleave',()=>{
    eachNum.style.color='black';
    eachNum.style.backgroundColor='';
})

document.querySelectorAll('.eachNum').forEach(element=>element.addEventListener('click',()=>{
    if (element.style.backgroundColor==='')   {
        element.style.backgroundColor='yellow';
    }
    else{
        element.style.backgroundColor=''
    }
    }));
