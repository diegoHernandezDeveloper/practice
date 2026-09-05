const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

let btn = document.querySelector('button')
let admittedParagraph = document.querySelector('.admitted')
let refusedParagraph = document.querySelector('.refused')

btn.addEventListener('click', filter)

function filter() {
    let wantedPeople = []
    let unwantedPeople = []
    for(let guest of people) {
        if(guest == 'Phil' || guest == 'Lola') {
            unwantedPeople.push(guest)
        } else {
            wantedPeople.push(guest)
        }
    }
    admittedParagraph.innerHTML = wantedPeople.join(', ');
    refusedParagraph.innerHTML = unwantedPeople.join(', ');   
}
