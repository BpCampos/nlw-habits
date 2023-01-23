const form = document.querySelector('.calendar')
const register = document.querySelector('.register')
const nlwSetup = new NLWSetup(form)

register.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const dataHoje = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const today = dataHoje
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        return alert('Dia já adicionado')
    }

    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('savedDay', JSON.stringify(nlwSetup.data));
}


const data = JSON.parse(localStorage.getItem('savedDay')) || {}
nlwSetup.setData(data);
nlwSetup.load();

