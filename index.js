 startingHour = 0
 time = startingHour * 3600;
 stopWatch = document.getElementById("stopwatch");

 setInterval(updateStopwatch, 1000)

 function updateStopwatch(){
     hours = Math.floor(time / 3600)
     minutes = Math.floor( time / 60)
     seconds = time % 60
     hours = hours < 10 ? "0" + hours :hours
     minutes = minutes < 10 ? "0" + minutes :minutes
     seconds = seconds < 10 ? "0" + seconds :seconds
     stopWatch.innerHTML = `${hours}:${minutes}:${seconds}`
     time++
 }


