const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,index) => {
  const itemNumber = movieLists[index].querySelectorAll("img").length;
  let clickCounter = 0;

  arrow.addEventListener("click", ()=>{
    clickCounter++;
    if (itemNumber - (4 + clickCounter) > 0){
      movieLists[index].style.transform = `translateX(${movieLists[index].computedStyleMap().get("transform")[0].x.value-300}px)`;
    }else{
      movieLists[index].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  }) 

})



const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".toggle , .movie-list-title , .navbar-container , .sidebar , .toggle , .movie-list-container");


ball.addEventListener("click",()=>{
  items.forEach(item=>{
    item.classList.toggle("active");
  })
  ball.classList.toggle("active");
})
