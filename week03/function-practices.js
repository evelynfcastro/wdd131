let firstName = 'Antonia';
let lastName = 'Francesca';
console.log(FirstLastname(firstName,lastName))



const FullName = function (first_name, second_name){
    return first_name+ " "+second_name
}

const FullNameArrow = (first,last) => first + " "+ last;
document.querySelector("fullName").textContent = FullNameArrow(firstName,lastName);