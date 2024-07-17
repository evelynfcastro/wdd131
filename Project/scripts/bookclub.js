document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', function () {
        nav.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});




const bookList=[
    {
        bookName: "Pride and Prejudice",
        publishYear:1813,
        author: "Jane Austen",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKvaRerNXgGcdv6kmjVnR158kJtUEEXG7-A&s",
        opinion:"Pride and Prejudice by Jane Austen is a beloved classic that explores the themes of love, class, and social expectations in early 19th-century England. The story centers on Elizabeth Bennet, a sharp-witted young woman, and her evolving relationship with the proud and wealthy Mr. Darcy. Through their interactions and misunderstandings, Austen masterfully depicts the importance of character and personal growth. Filled with wit and keen social commentary, Pride and Prejudice remains a timeless exploration of human nature and romance.",
        alt:"book Pride and Prejudice"
    },
    {
        bookName:"Selection" ,
        publishYear:2012,
        author: "Kiera Cass",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBJ7qc4QugrI2sFLSkdda5B86gm24W5qBqw&s",
        opinion:"The Selection by Kiera Cass is a captivating dystopian romance set in a future where society is divided into castes. The story follows America Singer, a young woman from a lower caste, who is chosen to compete in the Selection—a televised contest where thirty-five girls vie for the heart of Prince Maxon and the chance to become the next queen. As America navigates the palace intrigue and forms a connection with the prince, she must also grapple with her feelings for her first love, Aspen. With its blend of romance, drama, and a touch of fairy-tale magic, The Selection offers an engaging and escapist read.",
        alt:"book selection"
    },
    {
        bookName: "Little Women",
        publishYear:1868,
        author: "Louisa May Alcott",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9s4nM6driuOV9XS0Y-ls8ApieyJSZzpASpQ&s"  ,     
        opinion:"Little Women by Louisa May Alcott is a cherished classic that follows the lives of the four March sisters—Jo, Meg, Beth, and Amy—during and after the American Civil War. Growing up in modest circumstances, each sister navigates her own path to adulthood, balancing personal ambitions with familial duties. Jo, the spirited and independent writer, serves as the heart of the story. Through their trials, joys, and enduring bond, Alcott beautifully explores themes of family, love, and the pursuit of dreams. Little Women remains an enduring tale of resilience and sisterhood. "  ,
        alt:"book little women "
    }
]


function bookCard(list){
    document.querySelector("#book-review").innerHTML="";
    for(const item of list){
        let name = item.bookName;
        let author=item.author;
        let year= item.publishYear;
        let image=item.image;
        let review=item.opinion;
        let alt=item.alt;

    document.querySelector("#book-review").innerHTML += 
    `
    <div class="my-book">
        <h3 class="cardTitle">${name}</h3> <br>
        <img src=${image} loading="lazy" alt="${alt}" width="250" height="200"><br>
        <p> Publish Year: ${year}  <br>
        <p>  Author: ${author} </p> <br>
        <p> Review: ${review} </p> <br> 


    </div>`;
    }
}

bookCard(bookList);



