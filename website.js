const introduction=document.querySelector(".baslik2");
const header3=document.querySelector(".baslik3");
const icon1=document.querySelector(".icon1");
const div=document.querySelector("#div1");
const p1=document.createElement("p");
const p2=document.createElement("p");
const p3=document.createElement("p");
const p4=document.createElement("p");
const input=document.createElement("input");
const header2=document.querySelector(".baslik2");
const text1=document.querySelector(".text1");
const image1=document.querySelector(".image1")

div.appendChild(input)
div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)
div.appendChild(p4)

p1.className="p1";
p1.textContent="Introduction"
p2.className="p2"
p2.textContent="Experience";
p3.className="p3"
p3.textContent="Education";
p4.className="p4"
p4.textContent="Contact Information";




div.style.display = "flex";
div.style.flexDirection = "column";
div.style.top = "5rem"; 
div.style.right = "1rem"; 
div.style.position="fixed"
div.style.zIndex = "9999"; 
div.style.display="none"
div.style.border="1px solid gray";
div.style.borderRadius="50px"
div.style.paddingRight="3rem";
div.style.backgroundColor="rgb(26,26,26)";
div.style.minHeight="350px"
div.style.minWidth="300px"



input.className="input";
input.style.width="75%"
input.style.marginRight="0.5rem"
input.style.marginTop="2rem"
input.style.marginLeft="3rem"
input.style.alignSelf="center"
input.style.padding="0.6rem"
input.style.marginBottom="1rem"
input.style.borderRadius="10px";




const paragraphs=[p1,p2,p3,p4];
paragraphs.forEach(p=>{
    p.style.color="white"
    p.style.borderRadius="3rem"
    p.style.textAlign="center"
    p.style.margin="0.5rem"
    p.style.padding="0.6rem"
    p.style.marginTop="3px"
    p.style.letterSpacing="1px"
    p.style.fontSize="25px"
    p.style.width="100%"
    p.addEventListener('mouseover',()=>{
        p.style.color="white";
        p.style.backgroundColor="black"
        p.style.cursor="pointer"
        p.style.fontSize="22px"
        
    })
    p.addEventListener('mouseout',()=>{
        p.style.color="white";
        p.style.backgroundColor="rgb(26,26,26)"
        p.style.fontSize="25px"

    })

    p.addEventListener('mousedown',()=>{
        p.style.color="#d3d3d3"
    })
    p.addEventListener('mouseup',()=>{
        p.style.color="white"
    })

});






input.addEventListener("keyup",function(){
    paragraphs.forEach(p=>{
        if(p.textContent.toUpperCase().trim().includes(input.value.toUpperCase().trim())){
            p.style.display="block"
         }
         else{
            p.style.display="none"
         }
    })

        
    
})




p1.addEventListener("click",function(){
    introduction.scrollIntoView({ behavior: 'smooth' })
});
p4.addEventListener("click",function(){
    header3.scrollIntoView({behavior:'smooth'})
});







// icon1.addEventListener("click",elements);
// function elements(e){
//     e.preventDefault();
//     if(div.style.display==="none"){
//         div.style.display="flex"
//     }
//     else{
//         div.style.display="none";
//     }
// }
//// other way
icon1.addEventListener('click', function(e) {
    e.preventDefault()
    div.classList.toggle('show');
});






const mediaQuery = window.matchMedia('(max-width: 500px)');
function handleScreenSizeChange(event) {
    if (event.matches) {
        // Ekran genişliği 500px veya daha küçükse div'in genişliğini değiştir
        div.style.width = "30%"; // Örneğin, genişliği %100 yap
        div.style.paddingRight = "3rem"; // Sağ padding'i azalt
        div.style.minWidth = "100px"; // Minimum genişliği küçült
        div.style.marginRight="10px";
        div.style.marginTop="6rem";
        header2.style.padding="5rem";
        text1.style.marginRight="2rem"
        image1.style.paddingTop="3rem"  
        
    } 
}


// Sayfa yüklendiğinde medya sorgusunun mevcut durumunu kontrol edin
handleScreenSizeChange(mediaQuery);
mediaQuery.addEventListener(handleScreenSizeChange);









