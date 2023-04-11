//INÍCIO FILIAL 1
function GetFilialUmOsPendenteCx() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialUmOsPendenteCx(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialUmOsPendenteCx(data) {
        const filialUmOsPendenteCx = document.getElementById('filialUmOsPendenteCx');
        if(data == ''){
            filialUmOsPendenteCx.innerHTML = '0';
            console.log('Está vazio');
        } else{
            data.forEach(item => {
                console.log(item.os);
                filialUmOsPendenteCx.innerHTML = item.os;
            });
        }
    }
}

function GetFilialUmOsAguardandoCx() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialUmOsAguardandoCx(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialUmOsAguardandoCx(data) {
        const filialUmOsAguardandoCx = document.getElementById('filialUmOsAguardandoCx');
        if(data == ''){
            filialUmOsAguardandoCx.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialUmOsAguardandoCx.innerHTML = item.os;
            });
        }
    }
}

function GetFilialUmOsConcluidaCx() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialUmOsConcluidaCx(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialUmOsConcluidaCx(data) {
        const filialUmOsConcluidaCx = document.getElementById('filialUmOsConcluidaCx');
        if(data == ''){
            filialUmOsConcluidaCx.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialUmOsConcluidaCx.innerHTML = item.os;
            });
        }
    }
}

function GetFilialUmOsPendenteFw() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialUmOsPendenteFw(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialUmOsPendenteFw(data) {
        const filialUmOsPendenteFw = document.getElementById('filialUmOsPendenteFw');
        if(data == ''){
            filialUmOsPendenteFw.innerHTML = '0';
            console.log('Está vazio');
        } else {
            data.forEach(item => {
                console.log(item.os);
                filialUmOsPendenteFw.innerHTML = item.os;
            });
        }
    }
}

function GetFilialUmOsAguardandoFw() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialUmOsAguardandoFw(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialUmOsAguardandoFw(data) {
        const filialUmOsAguardandoFw = document.getElementById('filialUmOsAguardandoFw');
        if(data == ''){
            filialUmOsAguardandoFw.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialUmOsAguardandoFw.innerHTML = item.os;
            });
        }
    }
}

function GetFilialUmOsConcluidaFw() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialUmOsConcluidaFw(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialUmOsConcluidaFw(data) {
        const filialUmOsConcluidaFw = document.getElementById('filialUmOsConcluidaFw');
        if(data == ''){
            filialUmOsConcluidaFw.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialUmOsConcluidaFw.innerHTML = item.os;
            });
        }
    }
}

function GetFilialUmPedLib() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialUmPedLib(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialUmPedLib(data) {
        const filialUmPedLib = document.getElementById('filialUmPedLib');
        if(data == ''){
            filialUmPedLib.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.ped);
                filialUmPedLib.innerHTML = item.ped;
            });
        }
    }
}

function GetFilialUmPedLBloq() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialUmPedBloq(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialUmPedBloq(data) {
        const filialUmPedBloq = document.getElementById('filialUmPedBloq');
        if(data == ''){
            filialUmPedBloq.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.ped);
                filialUmPedBloq.innerHTML = item.ped;
            });
        }
    }
}
//FIM FILIAL 1

//INÍCIO FILIAL 2
function GetFilialDoisOsPendenteCx() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialDoisOsPendenteCx(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialDoisOsPendenteCx(data) {
        const filialDoisOsPendenteCx = document.getElementById('filialDoisOsPendenteCx');
        if(data == ''){
            filialDoisOsPendenteCx.innerHTML = '0';
            console.log('Está vazio');
        } else{
            data.forEach(item => {
                console.log(item.os);
                filialDoisOsPendenteCx.innerHTML = item.os;
            });
        }
    }
}

function GetFilialDoisOsAguardandoCx() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialDoisOsAguardandoCx(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialDoisOsAguardandoCx(data) {
        const filialDoisOsAguardandoCx = document.getElementById('filialDoisOsAguardandoCx');
        if(data == ''){
            filialDoisOsAguardandoCx.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialDoisOsAguardandoCx.innerHTML = item.os;
            });
        }
    }
}

function GetFilialDoisOsConcluidaCx() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialDoisOsConcluidaCx(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialDoisOsConcluidaCx(data) {
        const filialDoisOsConcluidaCx = document.getElementById('filialDoisOsConcluidaCx');
        if(data == ''){
            filialDoisOsConcluidaCx.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialDoisOsConcluidaCx.innerHTML = item.os;
            });
        }
    }
}

function GetFilialDoisOsPendenteFw() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialDoisOsPendenteFw(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialDoisOsPendenteFw(data) {
        const filialDoisOsPendenteFw = document.getElementById('filialDoisOsPendenteFw');
        if(data == ''){
            filialDoisOsPendenteFw.innerHTML = '0';
            console.log('Está vazio');
        } else {
            data.forEach(item => {
                console.log(item.os);
                filialDoisOsPendenteFw.innerHTML = item.os;
            });
        }
    }
}

function GetFilialDoisOsAguardandoFw() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialDoisOsAguardandoFw(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialDoisOsAguardandoFw(data) {
        const filialDoisOsAguardandoFw = document.getElementById('filialDoisOsAguardandoFw');
        if(data == ''){
            filialDoisOsAguardandoFw.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialDoisOsAguardandoFw.innerHTML = item.os;
            });
        }
    }
}

function GetFilialDoisOsConcluidaFw() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialDoisOsConcluidaFw(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialDoisOsConcluidaFw(data) {
        const filialDoisOsConcluidaFw = document.getElementById('filialDoisOsConcluidaFw');
        if(data == ''){
            filialDoisOsConcluidaFw.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialDoisOsConcluidaFw.innerHTML = item.os;
            });
        }
    }
}

function GetFilialDoisPedLib() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialDoisPedLib(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialDoisPedLib(data) {
        const filialDoisPedLib = document.getElementById('filialDoisPedLib');
        if(data == ''){
            filialDoisPedLib.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.ped);
                filialDoisPedLib.innerHTML = item.ped;
            });
        }
    }
}

function GetFilialDoisPedLBloq() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialDoisPedBloq(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialDoisPedBloq(data) {
        const filialDoisPedBloq = document.getElementById('filialDoisPedBloq');
        if(data == ''){
            filialDoisPedBloq.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.ped);
                filialDoisPedBloq.innerHTML = item.ped;
            });
        }
    }
}
//FIM FILIAL 2

//INÍCIO FILIAL 3
function GetFilialTresOsPendenteCx() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialTresOsPendenteCx(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialTresOsPendenteCx(data) {
        const filialTresOsPendenteCx = document.getElementById('filialTresOsPendenteCx');
        if(data == ''){
            filialTresOsPendenteCx.innerHTML = '0';
            console.log('Está vazio');
        } else{
            data.forEach(item => {
                console.log(item.os);
                filialTresOsPendenteCx.innerHTML = item.os;
            });
        }
    }
}

function GetFilialTresOsAguardandoCx() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialTresOsAguardandoCx(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialTresOsAguardandoCx(data) {
        const filialTresOsAguardandoCx = document.getElementById('filialTresOsAguardandoCx');
        if(data == ''){
            filialTresOsAguardandoCx.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialTresOsAguardandoCx.innerHTML = item.os;
            });
        }
    }
}

function GetFilialTresOsConcluidaCx() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialTresOsConcluidaCx(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialTresOsConcluidaCx(data) {
        const filialTresOsConcluidaCx = document.getElementById('filialTresOsConcluidaCx');
        if(data == ''){
            filialTresOsConcluidaCx.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialTresOsConcluidaCx.innerHTML = item.os;
            });
        }
    }
}

function GetFilialTresOsPendenteFw() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialTresOsPendenteFw(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialTresOsPendenteFw(data) {
        const filialTresOsPendenteFw = document.getElementById('filialTresOsPendenteFw');
        if(data == ''){
            filialTresOsPendenteFw.innerHTML = '0';
            console.log('Está vazio');
        } else {
            data.forEach(item => {
                console.log(item.os);
                filialTresOsPendenteFw.innerHTML = item.os;
            });
        }
    }
}

function GetFilialTresOsAguardandoFw() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialTresOsAguardandoFw(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialTresOsAguardandoFw(data) {
        const filialTresOsAguardandoFw = document.getElementById('filialTresOsAguardandoFw');
        if(data == ''){
            filialTresOsAguardandoFw.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialTresOsAguardandoFw.innerHTML = item.os;
            });
        }
    }
}

function GetFilialTresOsConcluidaFw() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialTresOsConcluidaFw(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialTresOsConcluidaFw(data) {
        const filialTresOsConcluidaFw = document.getElementById('filialTresOsConcluidaFw');
        if(data == ''){
            filialTresOsConcluidaFw.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.os);
                filialTresOsConcluidaFw.innerHTML = item.os;
            });
        }
    }
}

function GetFilialTresPedLib() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialTresPedLib(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialTresPedLib(data) {
        const filialTresPedLib = document.getElementById('filialTresPedLib');
        if(data == ''){
            filialTresPedLib.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.ped);
                filialTresPedLib.innerHTML = item.ped;
            });
        }
    }
}

function GetFilialTresPedLBloq() {
    fetch()
        .then(response => response.json())
        .then(data => _DisplayGetFilialTresPedBloq(data))
        .catch(error => console.error('Não foi possível retornar dados!', error));

    function _DisplayGetFilialTresPedBloq(data) {
        const filialTresPedBloq = document.getElementById('filialTresPedBloq');
        if(data == ''){
            filialTresPedBloq.innerHTML = '0';
            console.log('Está vazio');
        }
        else{
            data.forEach(item => {
                console.log(item.ped);
                filialTresPedBloq.innerHTML = item.ped;
            });
        }
    }
}
//FIM FILIAL 3

 function GetAllFunctions() {
    GetFilialUmOsPendenteCx()
    GetFilialUmOsAguardandoCx()
    GetFilialUmOsConcluidaCx()
    GetFilialUmOsPendenteFw()
    GetFilialUmOsAguardandoFw()
    GetFilialUmOsConcluidaFw()
    GetFilialDoisOsPendenteCx()
    GetFilialDoisOsAguardandoCx()
    GetFilialDoisOsConcluidaCx()
    GetFilialDoisOsPendenteFw()
    GetFilialDoisOsAguardandoFw()
    GetFilialDoisOsConcluidaFw()
    GetFilialTresOsPendenteCx()
    GetFilialTresOsAguardandoCx()
    GetFilialTresOsConcluidaCx()
    GetFilialTresOsPendenteFw()
    GetFilialTresOsAguardandoFw()
    GetFilialTresOsConcluidaFw()

    GetFilialUmPedLib()
    GetFilialUmPedLBloq()
    GetFilialDoisPedLib()
    GetFilialDoisPedLBloq()
    GetFilialTresPedLib()
    GetFilialTresPedLBloq()
}
setInterval(GetAllFunctions, 15000)