
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const today = new Date();
const yearElement = document.querySelector("#year");

// Update the content of the element
yearElement.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
const lastModified = new Date(document.lastModified);

// Format the last modified date as desired (e.g., using toLocaleDateString)
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModified.toLocaleDateString('en-US', options);

// Update the content of the element with id="lastModified"
document.getElementById('lastmod').textContent = formattedDate;


//Pictures
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName:"Curitiba Brazil",
        location:"Curitiba, Paraná, Brazil",
        dedicated:"2008, 1, June",
        area: 41407,
        imageUrl: 
        "https://www.churchofjesuschrist.org/imgs/ea7e0f39c8e26d163a4dfedfcb1ce5c41d650b5b/full/320%2C/0/default"
    },
    {
        templeName:"São Paulo Brazil",
        location:"São Paulo, Brazil",
        dedicated:"1978, 30, outubro",
        area: 35000,
        imageUrl:"https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/320%2C/0/default"
    },
    {
        templeName:"Manaus Brazil",
        location:"Manaus, Brasil",
        dedicated:"2012, 10, June",
        area: 29750,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/f758727dc0cd20dc24845be6e5810f81e400d603/full/320%2C/0/default"
    }
  ];
  


  function CardTemple(filteredTemple){
  document.querySelector("#images").innerHTML="";
  for(const item of filteredTemple){

    let TempleName = item.templeName;
    let location= item.location;
    let dedicatedDate= item.dedicated;
    let area= item.area;
    let image= item.imageUrl;

    document.querySelector("#images").innerHTML += 
    `<div class="card">
    
    <h3> ${TempleName}</h3> <br>
    <p><b> Location:<b> ${location} </p> <br>
    <p> <b> Dedication Date:<b> ${dedicatedDate} </p> <br>
    <p> <b> Area:<b> ${area} </p> <br> 
    <img src=${image} loading="lazy" alt= ${TempleName} width="250" height="200"><br>

    </div>`;

  }}

  CardTemple(temples);

  const homeLink= document.querySelector("#home");
  const oldLink = document.querySelector("#old");
  const newLink= document.querySelector("#new");
  const largeLink= document.querySelector("#large");
  const smallLink= document.querySelector("#small");


oldLink.addEventListener("click", ()=>{
    const filteredTemples = temples.filter((temple) => {
        let dedicatedDate = temple.dedicated;
        let year = parseInt(dedicatedDate.split(',')[0].trim());
        return year < 1900;
    
})

CardTemple(filteredTemples)
document.querySelector("#current-page-name").textContent = "Old";
});


newLink.addEventListener("click", ()=>{
    const filteredTemples= temples.filter((temple)=>{
        let dedicatedDate=temple.dedicated;
        let year= parseInt(dedicatedDate.split(',')[0].trim());
        return year > 2000;
    })
    CardTemple(filteredTemples)
    document.querySelector("#current-page-name").textContent = "New";
});

largeLink.addEventListener("click",()=>{
    CardTemple(temples.filter((temple) => temple.area > 90000))
    document.querySelector("#current-page-name").textContent = "Large";
});
 
smallLink.addEventListener("click", ()=>{
    CardTemple(temples.filter((temple)=> temple.area<10000))
    document.querySelector("#current-page-name").textContent = "Small"
});

homeLink.addEventListener("click",()=>{
    CardTemple(temples);
    document.querySelector("#current-page-name").textContent = "Home"
})