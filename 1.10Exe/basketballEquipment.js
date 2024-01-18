function basketballEquipment(input) {
    let yearTax = Number(input[0]);

    let snickersPrice = yearTax - (yearTax * 0.40);
    let equipmentPrice = snickersPrice - (snickersPrice * 0.20);
    let basketball = equipmentPrice * 0.25;
    let accecories = basketball * 0.20;

    let totalSum = snickersPrice + equipmentPrice + basketball + accecories + yearTax;


    console.log(totalSum);
}

basketballEquipment(["365 "]);