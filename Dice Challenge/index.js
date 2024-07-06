function game() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    {
        if (randomNumber1 === 1) {
            document.querySelector(".img1").setAttribute("src", "./images/dice1.png")
        }
        else if (randomNumber1 === 2) {
            document.querySelector(".img1").setAttribute("src", "./images/dice2.png")

        }
        else if (randomNumber1 === 3) {
            document.querySelector(".img1").setAttribute("src", "./images/dice3.png")

        }
        else if (randomNumber1 === 4) {
            document.querySelector(".img1").setAttribute("src", "./images/dice4.png")

        }
        else if (randomNumber1 === 5) {
            document.querySelector(".img1").setAttribute("src", "./images/dice5.png")

        }
        else if (randomNumber1 === 6) {
            document.querySelector(".img1").setAttribute("src", "./images/dice6.png")

        }


    }
    {
        // Instead of using if else statement you can do it this way which is more neat and fast..

        let randomSource2 = "./images/dice" + randomNumber2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", randomSource2); // you can also use (document.querySelector(".img1") to change this)
    }
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins🥇";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins🥇";

    }
    else {
        document.querySelector("h1").innerHTML = "It's a Draw";

    }
}

