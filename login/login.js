const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector('.btn-dangnhap');
loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    if(username!=='trieu' || password!=='123'){
        alert('nhập mật khẩu sai phải nhập trieu 123');
    }else if(username==='trieu' || password==='123'){
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href='../user/home_user.html';
    }else{
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        usernameInput.value = '';
        passwordInput.value = '';
    }
    


  });

  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  console.log('Username:', username);
  console.log('Password:', password);