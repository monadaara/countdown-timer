

class CountDown
{
    constructor(expireDate,onRender,onComplete)
    {
        this.setExpiredDate(expireDate)
        this.onRender=onRender;
        this.onComplete=onComplete;
    }

    setExpiredDate(expireDate)
    {
        const currentTime=new Date().getTime();

        this.timeRemaining=expireDate.getTime()-currentTime;

        this.timeRemaining <=0 ? this.complete():this.star();

    }
    getTime()
    {
        return {
            days:Math.floor(this.timeRemaining/1000/60/60/24),
            hours:Math.floor(this.timeRemaining/1000/60/60)%24,
            minutes:Math.floor(this.timeRemaining/1000/60)%60,
            seconds:Math.floor(this.timeRemaining/1000)%60,
        }
    }
    complete()
    {
        if(typeof this.onComplete ==='function')
        {
            this.onComplete();
        }
    }

    update()
    {
        if(typeof this.onRender === 'function')
        {
            this.onRender(this.getTime());
        }
    }

    star()
    {
        this.update();

        const intervelId=setInterval(()=>
        {
            this.timeRemaining -=1000;

            if(this.timeRemaining <0)
            {
                this.complete();


                clearInterval(intervelId);
            }
            else
            {
                this.update();
            }
        },1000);
    }
}