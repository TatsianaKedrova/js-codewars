const containers = document.querySelector(".content");

for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener('click', displayEventPhase, false);
}

function displayEventPhase( e ) {
    let phase = e.eventPhase;
    
}