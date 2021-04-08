class Timer{
    constructor(){
        this.value = 0;
    }

    startTimer(){
        setInterval(() => {
            this.value++;
        }, 1000)
    }

}


