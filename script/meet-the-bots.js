const data = [
    [
        "product1",
        "product2",
        "product3",
    ],
    [
        "Loki",
        "Atheera",
        "Honey Badger",
    ],
    [
        "2022",
        "2023",
        "2024",
    ],
    [
        "Configurations",
        "Drive Units",
        "Armament",
    ],
    [
        ["Wedge", "Armour", "Anti-Skid", "Skid"],
        ["P-S4 Brushless", "P-W01 Brushed"],
        ["Armour", "Anti-Skid"],
    ],
    [90, 85, 96],
    [
        "background1",
        "background2",
        "background3",
    ],
];

/* Progress Bar */
const progText = document.querySelector(".progText");
const progress = document.querySelector(".progress");

function progressBar(percentage) {
    progText.innerText = 0;
    let count = 0;
    /* Change for transition duration */
    progress.style.transition = 50 * data[5][percentage] + "ms"; 
    /* Move Progress according to the number in the circle */
    progress.style.bottom = data[5][percentage] - 110 + "%";

    /* Function for Counting up */
    function updateCount() {
        const target = data[5][percentage];

        if (count < target) {
            count++;
            progText.innerText = count + "%";
            //Count Speed
            setTimeout(updateCount, 30);
        }
        else {
            //Display the final value on the page
            progText.innerText = target + "%";
        }
    }
    updateCount();
}
progressBar(0);

/* Options */
const optionsList = document.querySelector('.options-list');
const options = document.querySelectorAll('.options-list > li');

optionsList.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('option')){
        for(let i=0; i < optionsList.children.length; i++) {
            optionsList.children[i].classList.remove('option-active');
        }
        e.target.classList.add('option-active');
    }
});

const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const img = document.querySelector('.product-image img');
const name = document.querySelector('.product-name');
const price = document.querySelector('.product-price');
const optionTitle = document.querySelector('.product-option-title');
const bg = document.querySelector('.panel-1');

let id = 0;
let li;

function slider(id) {
    img.src = "../../img/blog_img/meet-the-bots/img/" + data[0][id] + ".png";

    img.classList.add('fade-in');

    setTimeout(() => {
        img.classList.remove('fade-in');
    }, 850);

    name.innerText = data[1][id];
    price.innerText = data[2][id];
    optionTitle.innerText = data[3][id];

    for (let i = 0; i < data[4][id].length; i++)
    {
        li = document.createElement('li');
        li.innerHTML = data[4][id][i];
        li.classList.add('option');

        if (i == 0)
        {
            optionsList.innerHTML = "";

            li.classList.add('option-active');
        }
        optionsList.appendChild(li);
    }
    bg.style.backgroundImage = "url(../../img/blog_img/meet-the-bots/img/" + data[6][id] + ".jpg)";

    progressBar(id);
}

arrLeft.addEventListener('click', () => {
    id--;

    if (id < 0) {
        id = data[0].length - 1;
    }

    slider(id);
});

arrRight.addEventListener('click', () => {
    id++;

    if (id > data[0].length - 1) {
        id = 0;
    }

    slider(id);
});