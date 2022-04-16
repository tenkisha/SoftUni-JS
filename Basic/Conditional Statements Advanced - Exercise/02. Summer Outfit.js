function summerOutfit(input) {
    let gradus = Number(input[0]);
    let theTime = input[1];

    let outfit;
    let shoes;

    if (gradus >= 10 && gradus <= 18) {
        if (theTime == "Morning") {
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        }
        else if (theTime == "Afternoon" || theTime == "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }
    if (gradus > 18 && gradus <= 24) {
        if (theTime == "Morning") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
        else if (theTime == "Afternoon") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        }
        else if (theTime == "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }

    }
    else if (gradus >= 25) {
        if (theTime == "Morning") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        }
        else if (theTime == "Afternoon") {
            outfit = "Swim Suit"
            shoes = "Barefoot"
        }
        else if (theTime == "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }
    console.log(`It's ${gradus} degrees, get your ${outfit} and ${shoes}.`)
}

summerOutfit(['25','Evening'])