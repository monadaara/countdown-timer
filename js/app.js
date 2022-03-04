const app=document.querySelector('.countdown-timer');
const message=document.querySelector('.message');
const heading=document.querySelector('h1');
const year=document.querySelector('.year');

const getNewYear=()=>
{
    const currentYear=new Date().getFullYear();

    return new Date(`january 01 ${currentYear+1} 00:00:00`)
}
 year.textContent=getNewYear().getFullYear();
const format=(t)=>
{
    return t<10 ? '0'+t:t;
}

const render = (time) => {
    app.innerHTML = `
        <div class="count-down">
            <div class="timer">
                <h2 class="days">${format(time.days)}</h2>
                <small>Days</small>
            </div>
            <div class="timer">
                <h2 class="hours">${format(time.hours)}</h2>
                <small>Hours</small>
            </div>
            <div class="timer">
                <h2 class="minutes">${format(time.minutes)}</h2>
                <small>Minutes</small>
            </div>
            <div class="timer">
                <h2 class="seconds">${format(time.seconds)}</h2>
                <small>Seconds</small>
            </div>
        </div>
        `;
};


const showMessage=()=>
{
    message.textContent=`happy new year ${getNewYear}!`;
    app.textContent='';
    heading.style.display='none';
}

const hideMessage=()=>
{
    message.textContent='';
    heading.style.display='block';
}

const complete=()=>
{
    showMessage();


    setTimeout(()=>
    {
        hideMessage();
        countDownTimer.setExpiredDate(getNewYear())
    },1000*60*60*24);
}


const countDownTimer=new CountDown(
    getNewYear(),render,complete
)
