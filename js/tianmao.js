//边导航开始
{
    let dingobj = document.querySelector(".biandaohang-ding");
    // console.log(dingobj);
    dingobj.onclick=function () {
        let diandingobj = document.body.scrollTop===0?document.documentElement:document.body;
        // console.log(diandingobj);
        // let st=diandingobj.scrollTop;
        // console.log(st);
        let speed = 100;
        let t = setInterval(function () {
            diandingobj.scrollTop-=speed;
            // console.log(st);
            if(diandingobj.scrollTop<=0){
                // diandingobj.scrollTop=0;
                clearInterval(t);
            }
        },50)
    }
}

//banner开始
{
let lunbos = document.querySelectorAll(".lunbotu-quan");
console.log(lunbos);
let imgs = document.querySelectorAll(".banner-neikuan li");
    console.log(imgs);
lunbos.forEach(function (val,index) {
    val.onclick = function () {
        for(let i=0;i<lunbos.length;i++){
            lunbos[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        val.classList.add("active");
        imgs[index].classList.add("active");
    }
});
    let now =0;
let st=setInterval(bannerFn,2000);
    function bannerFn() {
        now++;
        if(now === lunbos.length){
            now=0;
        }
        for(let i=0;i<lunbos.length;i++){
            lunbos[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        lunbos[now].classList.add("active");
        imgs[now].classList.add("active");
    }
let bannerobj = document.querySelector("#banner");
    bannerobj.onmouseover = function () {
        clearInterval(st);
    };
    bannerobj.onmouseout = function () {
        st=setInterval(bannerFn,2000)
    }
}
let Obj;
// 顶部栏开始
{
    let dingbuObj = document.querySelector(".dingbulan");
        console.log(dingbuObj);
    window.onscroll=function () {
        Obj=document.body.scrollTop===0?document.documentElement:document.body;
        let st = Obj.scrollTop;
        if(st >800){
            dingbuObj.style.top="0";
        }else{
            dingbuObj.style.top="-60px";
        }
    }
}
//left边栏
{
    let leftObj = document.querySelector(".biandaohang");
    let conters = document.querySelectorAll(".conter");
    let lefts = document.querySelectorAll(".biandaohang li");
    console.log(conters);
    window.addEventListener("scroll",function () {
        let st=Obj.scrollTop;
        if(st >700){
            leftObj.style.cssText="width:40px;height:294px";
        }else{
            leftObj.style.cssText="width:0;height:0";
        }
        for(let i=0;i<conters.length;i++){
            if(st > conters[i].offsetTop-120){
                for(let i=0;i<conters.length;i++){
                    lefts[i].classList.remove("active");
                }
                lefts[i].classList.add("active");
            }
        }
    });
    lefts.forEach(function (val,index) {
        let tt = conters[index].offsetTop;
        val.onclick=function () {
            animate(Obj,{scrollTop:tt-60})
        }
    })
}