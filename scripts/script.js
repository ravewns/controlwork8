window.onload = function () {
    let element = document.getElementById('fullName');
    element.onkeydown = function (element) {
        if ("1234567890".indexOf(element.key) != -1)
            element.preventDefault();
    }

    let element2 = document.getElementById('userName');
    element2.onkeydown = function (element2) {
        if (". ,".indexOf(element2.key) != -1)
            element2.preventDefault();
    }

    let checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    });

    document.getElementById('Password').onchange = function (e) {
        passwordLong = this.value.length;
    };


    document.getElementById('signup').onclick = function () {
        let fullnameInput = document.getElementById('fullName');
        let usernameInput = document.getElementById('userName');
        let emailInput = document.getElementById('Email');
        let passwordInput = document.getElementById('Password');
        let repasswordInput = document.getElementById('rePassword');

        if (!fullnameInput.value) {
            alert('Заполните имя');
            return;
        }
        if (!usernameInput.value) {
            alert('Заполните никнейм');
            return;
        }
        if (!emailInput.value) {
            alert('Заполните почту');
            return;
        }
        if (!passwordInput.value) {
            alert('Заполните пароль');
            return;
        }
        if (!repasswordInput.value) {
            alert('Заполните пароль повторно');
            return;
        }
        if (passwordLong < 8) {
            alert('Пароль должен содержать более 8 символов');
            return;
        }
        if (document.getElementById("Password").value === document.getElementById("rePassword").value) {

        } else {
            alert('Пароли не совпадают');
            return;
        }
        if (document.getElementById("checkbox").checked) {

        } else {
            alert("Вы не одобрили соглашение");
            return;
        }
        document.getElementById("popup").style.display = "block";
    }

    document.getElementById('popup-ok').onclick = function () {
        document.getElementById("popup").style.display = "none";
        document.getElementById("fullName").value = "";
        document.getElementById("userName").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
        document.getElementById("rePassword").value = "";
        document.getElementById('checkbox').checked = false;
        login();
    }

    document.getElementById('link').onclick = function () {
        login();
    }

    function login() {
        document.getElementById('h1').innerText = "Log in to the system";
        document.getElementById('fullName').remove();
        document.getElementById('fullNameLabel').remove();
        document.getElementById('Email').remove();
        document.getElementById('EmailLabel').remove();
        document.getElementById('rePassword').remove();
        document.getElementById('repeatLabel').remove();
        document.getElementById('agree-group').remove();
        document.getElementById('signup').innerText = "Sign In";
        document.getElementById('link').remove();

        document.getElementById('signup').onclick = function () {
            let usernameInput = document.getElementById('userName');
            let passwordInput = document.getElementById('Password');

            if (!usernameInput.value) {
                alert('Заполните имя');
                return;
            }
            if (!passwordInput.value) {
                alert('Заполните пароль');
                return;
            }
            alert('Добро пожаловать, ' + document.getElementById('userName').value);
        }
    }

} //



