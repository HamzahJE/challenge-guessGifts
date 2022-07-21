
var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

const guessGifts = (wishlist, presents) =>{
    const guessed=[];
    for(i=0; i<wishlist.length;i++){
        for(j=0;j<presents.length;j++){
            if(wishlist[i].size === presents[j].size && wishlist[i].clatters === presents[j].clatters && wishlist[i].weight === presents[j].weight ){

                guessed.push(wishlist[j].name)
            }
        }
    }return guessed
}



console.log(guessGifts(wishlist, presents))