

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

/// SHOW MENU

menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

////HIDE MENU

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
})


const navItems = menu.querySelectorAll('li');

const changeActiveItem =() => {
  navItems.forEach(item => {
    const link =item.querySelector('a');
      link.classList.remove('active');
  })
}
document.onclick = function(e)  {
  if (window.innerWidth < 1200)
  if (!menuBtn.contains(e.target) && !menu.classList.contains(e.target)){
    menu.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  } 
}

navItems.forEach(item => {
  const link =item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItem ();
    link.classList.add('active');
  })
})

//READ MORE ABOUT
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
  readMoreContent.classList.toggle('show-content');

})

function sendwhatsapp(){
  var phonenumber = "+23280329440";

  var name = document.querySelector('.name').value;
  var mobile = document.querySelector('.mobile').value;
  var message = document.querySelector('.message').value;

  var url = "https://wa.me/" + phonenumber +  "?text=" 
  +" *Name of Customer:* " +name+ "%0a"
  +" *Mobile No.:* " +mobile+ "%0a"
  +" *Message:* " +message+"%0a%0a"

  window.open(url, '_blank').focus();

}


let words = document.querySelectorAll(".word");
words.forEach((word)=>{
  let letters = word.textContent.split("");
  word.textContent="";
  letters.forEach((letter)=>{
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(()=>{
      letter.className = "letter cut";
    },i * 80);
  });

  nextWord.style.opacity="1";
  Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
      letter.className = "letter in";
    },340 + i * 80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)





    