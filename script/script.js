// THEME RENDOM COLOR
let body = document.querySelector('body');
function themeBtn(){
    let color = '';

    for (let i = 0; i < 6; i++) {
        const randomDigit = Math.floor(Math.random() * 16);
        color += randomDigit.toString(16);
    }
    body.style.backgroundColor = '#' + color;
}



// LIVE DATE UPDATE
const date = new Date();
let day = document.querySelector('#day');
let fullDate = document.querySelector('#full_date');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
   'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
day.innerHTML = `${days[date.getDay()]},`
fullDate.innerHTML = `${months[date.getMonth()]} 
${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}
${date.getFullYear()}`




// SCORES UPDATE WITH CARD BUTTONS
const cardButtons = document.getElementsByClassName('card_btn');

Array.from(cardButtons).forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Board updated Successfully');
        const checkboxNumber = document.getElementById('checkbox_number').innerText;
        const convertedCheckboxNumber = parseFloat(checkboxNumber);
        const taskNumber = document.getElementById('task_number').innerText;
        const convertedTaskNumber = parseFloat(taskNumber);
        
        if (convertedTaskNumber === 0) {
            return;
        }
        event.target.disabled = true;
        // this.disabled = true;
        // this.setAttribute('disabled', true);
        this.classList.add('bg-blue-200', 'cursor-not-allowed');
        this.classList.remove('bg-blue-600');


        const checkboxScore = convertedCheckboxNumber + 1;
        document.getElementById('checkbox_number').innerText = checkboxScore;
        const taskScore = convertedTaskNumber - 1;
        document.getElementById('task_number').innerText = taskScore < 10 ? `0${taskScore}` : `${taskScore}`;


        // ACTIVITY NOTIFICATIONS
        let title = this.closest('.taskCard').querySelector('.title').innerText;
        let taskTime = new Date().toLocaleTimeString()

        const container = document.getElementById('activity_container');
            const p = document.createElement('p');
            p.classList.add('bg-slate-100', 'rounded-lg', 'mx-5')
            p.innerHTML = `
            <p class='py-4 m-5 rounded-xl'>You have Complete The Task ${title} at ${taskTime}</p>
            `;
            container.appendChild(p);

            let allDisabled = [...cardButtons].every((btn)=>btn.disabled);
            if(allDisabled){
                alert('All tasks are completed!')
            }
    });
});

// CLEAR HISTORY
document.getElementById('clear_history_btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('activity_container').style.display= 'none';
})
