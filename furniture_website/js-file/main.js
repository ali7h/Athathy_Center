
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  menu1=document.querySelector('.show-menu1')
  menu2=document.querySelector('.show-menu2')

  sliderm=document.querySelector('.slide-mun')
  x=document.querySelector('.fa-times')
  let navtop= document.querySelector(".nav-top");
  let navleft= document.querySelector(".lhead");



  menu1.onclick=function(){
    sliderm.classList.add("open-slide")
  }
  x.onclick=function(){
    sliderm.classList.remove('open-slide')
  }
  
  menu2.onclick=function(){
    sliderm.classList.add("open-slide")
  }
  x.onclick=function(){
    sliderm.classList.remove('open-slide')
  }

links=document.querySelectorAll('.list a')
links.forEach(a=>{
  a.onclick=function(){
    sliderm.classList.remove('open-slide')
  }
})
  
window.onscroll = function () {


  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (230)) {
    navtop.style.display="block"
    for(i=0;i<navleft.childElementCount;i++){
    navleft.children[i].style.display='none'}
  }
  else{
      navtop.style.display='none'
      for(i=0;i<navleft.childElementCount;i++){
        navleft.children[i].style.display='block'}
  }

};


const counters=document.querySelectorAll('.number');
const delay=100;

counters.forEach(contr=>{
  const updatecount=()=>{
    const targ=contr.getAttribute('data-numb')
    const count=+contr.innerText;
    const speed=targ/delay;

    if(count<targ){
    contr.innerText=Math.floor(count+speed);
    setTimeout(updatecount,1)}
    else{
      contr.innerText=targ;
    }
  }
  updatecount();

})




$(document).ready(function(){

  $(function(){
    var content=$('.counters').html()

    $('.counters').countdown('2023/01/01', function(event) {
      $(this).html(event.strftime(content));
    });
  })
})

moon1=document.querySelector('.fas.fa-moon.first');
moon2=document.querySelector('.fas.fa-moon.second');

coun=0
moon1.onclick=function(){
  if(coun===0){
    document.documentElement.style.setProperty("--color1","black")
    document.documentElement.style.setProperty("--bkg1","white")
  coun+=1
  }
  else if(coun===1){
    document.documentElement.style.setProperty("--color1","white")
    document.documentElement.style.setProperty("--bkg1","#1b1b1c")

    coun-=1
  }
}


moon2.onclick=function(){
  if(coun===0){
    document.documentElement.style.setProperty("--color1","black")
    document.documentElement.style.setProperty("--bkg1","white")
  coun+=1
  }
  else if(coun===1){
    document.documentElement.style.setProperty("--color1","white")
    document.documentElement.style.setProperty("--bkg1","#1b1b1c")

    coun-=1
  }
}

loader=document.querySelector('.preloader')
window.addEventListener('load',function(){

  loader.style.display='none';
})


xx=document.querySelectorAll("#gallary .fa-search")

xx.forEach(element => {

  element.addEventListener("click",function(e){
    e.target.parentElement.parentElement.parentElement.children[0].click()
  })
});


let ourGallery = document.querySelectorAll("#gallary  div.imge > img")

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {
    
    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.append(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Append The Text To The Heading
      imgHeading.append(img.alt);

      // Append The Heading To The Popup Box
      popupBox.append(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.append(popupImage);

    // Append The Popup Box To Body
    document.body.append(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");
    

    // Append Text To Close Button
    closeButton.append("X");

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.append(closeButton);
  });

});

// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

  }
});


