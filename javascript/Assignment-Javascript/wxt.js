function gemstoDiamond(friend1, friend2, friend3) {
    if(friend1 == "number" && friend2 == "number" && friend3 == "number")
    {
    const friend1Gem = 21;
    const friend2Gem = 32;
    const friend3Gem = 43;
    const friend1Diamond = friend1Gem * friend1;
    const friend2Diamond = friend2Gem * friend2;
    const friend3Diamond = friend3Gem * friend3;
    const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
    if ( totalDiamond < 2000){
    return totalDiamond;
    }
    else {
    return totalDiamond - 2000;
    }
    }
    else
    {
    
    }
    }

    const CalFriendsGems = gemsToDiamond ( 20, 200, 50);
    console.log(CalFriendsGems);