console.log("This ia a Business Name Generator")
let adj = {
    a1 : "Crazy",
    a2 : "Amazing",
    a3 : "Fire"
}
let shop_name = {
    s1 : "Engine",
    s2 : "Foods",
    s3 : "Garments"
}
let aname = {
    an1 : "Bros",
    an2 : "Limited",
    an3 : "Hub"
}
let random = Math.random();
let rand = Math.random();
let ran = Math.random();
function adjj(a){
    if(a>0.1 && a<0.3)
        console.log(adj.a1)
    else if(a>0.3)
        console.log(adj.a2)
    else
    console.log(adj.a3)
}
function sname(s){
    if(s>0.1 && s<0.3)
        console.log(shop_name.a1)
    else if(s>0.3)
        console.log(shop_name.a2)
    else
    console.log(shop_name.a3)
}
function anam(an){
    if(an>0.1 && an<0.3)
        console.log(aname.a1)
    else if(an>=0.3)
        console.log(aname.a2)
    else
    console.log(aname.a3)
}

 adjj(random);
 sname(rand);
 anam(ran);


