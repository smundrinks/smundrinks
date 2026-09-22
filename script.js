const products=[
{id:1,name:"SMUN Signature",size:"330ml",price:85,desc:"Premium single-serve bottled water for refined table service."},
{id:2,name:"SMUN Custom",size:"330ml",price:95,desc:"Customized bottle presentation for cafés, events and brands."},
{id:3,name:"SMUN Event Pack",size:"500ml",price:110,desc:"A polished hydration option for weddings, corporate events and gatherings."}];
let cart=JSON.parse(localStorage.getItem("smunCart")||"[]");
const money=n=>new Intl.NumberFormat("en-PK").format(n);
function save(){localStorage.setItem("smunCart",JSON.stringify(cart));document.getElementById("count").textContent=cart.reduce((a,x)=>a+x.qty,0)}
function renderProducts(){document.getElementById("productsGrid").innerHTML=products.map(p=>`<article class="product"><div class="visual"><div class="mini"></div></div><p class="eyebrow">${p.size}</p><h3>${p.name}</h3><p>${p.desc}</p><div class="productBottom"><strong>PKR ${money(p.price)}</strong><button onclick="add(${p.id})">Add to cart</button></div></article>`).join("")}
function add(id){const x=cart.find(i=>i.id===id);x?x.qty++:cart.push({id,qty:1});save();openCart()}
function openCart(){renderCart();document.getElementById("cartModal").classList.add("open")}
function closeCart(){document.getElementById("cartModal").classList.remove("open")}
function renderCart(){let total=0;const box=document.getElementById("cartItems");if(!cart.length){box.innerHTML="<p class='muted'>Your cart is empty.</p>";document.getElementById("total").textContent="0";return}box.innerHTML=cart.map(i=>{const p=products.find(x=>x.id===i.id);total+=p.price*i.qty;return `<div class="row"><span>${p.name} × ${i.qty}</span><b>PKR ${money(p.price*i.qty)}</b></div>`}).join("");document.getElementById("total").textContent=money(total);const text="Assalam o Alaikum, I want to order from SMUN Drinks:%0A%0A"+cart.map(i=>{const p=products.find(x=>x.id===i.id);return `${p.name} (${p.size}) x ${i.qty} — PKR ${p.price*i.qty}`}).join("%0A")+"%0A%0ATotal: PKR "+total;document.getElementById("orderWA").href="https://wa.me/923000000000?text="+text}
renderProducts();save();