const divInterns = document.querySelectorAll(".divIntern") || document.querySelectorAll(".preDescription");
const buttonCollapse = document.querySelector(".buttonCollapse");
const buttonRefresh = document.querySelector(".buttonRefresh");

divInterns.forEach(function(divIntern){

    divIntern.addEventListener("mouseenter", function(event){
        if(this.children[1]) this.children[1].remove();

        const preDescription = document.createElement('div');
        preDescription.classList.add('preDescription');
        const imageDescription = document.createElement('div');
        imageDescription.classList.add('imageDescription');
        imageDescription.append(this.children[0].dataset.description);
        preDescription.append(imageDescription);

        this.appendChild(preDescription);
    });
    divIntern.addEventListener("mouseleave", function(event){
        this.children[1].remove();
    });
});

/******************** BUTTONS ***********************/

buttonCollapse.addEventListener("click", function(){
    divInterns.forEach((divIntern) => divIntern.children[0].classList.toggle('active'));
});
buttonRefresh.addEventListener("click", function(){
    location.reload();
});