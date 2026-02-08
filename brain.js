const arr=[
    `"The best way to predict the future is to create it." — Peter Drucker`,
    `"Success is not final, failure is not fatal: It is the courage to continue that counts." — Winston Churchill`,
    `"The only way to do great work is to love what you do." — Steve Jobs`,
    `"Don't watch the clock; do what it does. Keep going. — Sam Levenson`,
    `"It does not matter how slowly you go, as long as you do not stop." — Confucius`,
    `"Opportunities don't happen, you create them." — Chris Grosser`,
    `"You miss 100% of the shots you don’t take." — Wayne Gretzky`,
    `"In the middle of every difficulty lies opportunity." — Albert Einstein`,
    `"What lies behind us and what lies before us are tiny matters compared to what lies within us." — Ralph Waldo Emerson`,
    `"The harder you work for something, the greater you'll feel when you achieve it." — Anonymous`,
    `"Success is not how high you have climbed, but how you make a positive difference to the world." — Roy T. Bennett`,
    `"Dream big and dare to fail." — Norman Vaughan`,
    `"Don’t let yesterday take up too much of today." — Will Rogers`,
    `"The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt`,
    `"It always seems impossible until it's done." — Nelson Mandela`,
    `"The way to get started is to quit talking and begin doing." — Walt Disney`,
    `"Success usually comes to those who are too busy to be looking for it." — Henry David Thoreau`,
    `"It’s not whether you get knocked down, it’s whether you get up." — Vince Lombardi`,
    `"Your time is limited, so don’t waste it living someone else’s life." — Steve Jobs`,
    `"Everything you’ve ever wanted is on the other side of fear." — George Addair`
];

const shayari = [
  `"खामोशी भी एक अंदाज़ है कहने का, जो लफ्ज़ कह न सकें वो महसूस कर लेती है।"`,
  `"कुछ बातें दिल में ही रह जाती हैं, हर बात जुबां पर लाना जरूरी नहीं होता।"`,
  `"तेरी एक मुस्कान पर हम क्या से क्या हो गए, बस देखते ही देखते तुझमें खो गए।"`,
  `"इश्क़ वो नहीं जो दुनिया को दिखाया जाए, इश्क़ वो है जो दिल में ही निभाया जाए।"`,
  `"हर मुलाकात अधूरी सी लगी, जब तक तेरी बातों की मिठास न मिली।"`,
  `"दिल ने कहा उसे चाहो, दिमाग ने कहा छोड़ दो, और हम चुपचाप दिल की सुन बैठे।"`,
  `"वो नजर जो ठहर जाए, वही मोहब्बत की पहचान है।"`,
  `"कुछ लोग अल्फ़ाज़ नहीं होते, वो एहसास होते हैं।"`,
  `"तेरा नाम लबों पर लाना अच्छा लगता है, भले ही तुझे खबर न हो।"`,
  `"हमने तो बस चाहा था सुकून, पर तू ज़िंदगी की आदत बन गया।"`,
  `"कभी कभी खामोश रहना भी मोहब्बत निभाने का तरीका होता है।"`,
  `"तेरे बिना भी जी लेते हैं हम, मगर जीने का मज़ा नहीं आता।"`,
  `"हर किसी को पा लेना इश्क़ नहीं, किसी के इंतज़ार में रुक जाना इश्क़ है।"`,
  `"वो बात जो आंखों से कह दी जाए, उसे लफ्ज़ों की जरूरत नहीं होती।"`,
  `"दिल का हाल बताने की हिम्मत नहीं हुई, बस हर बार मुस्कुरा दिए।"`,
  `"तेरे ख्यालों में डूबना अब आदत सी बन गई है।"`,
  `"मोहब्बत का कोई शोर नहीं होता, ये तो खामोशी में भी सुनाई देती है।"`,
  `"हमने चाहा था तुझे पूरी शिद्दत से, बस जताने का हुनर नहीं आया।"`,
  `"कुछ रिश्ते बिना नाम के ही सबसे गहरे होते हैं।"`,
  `"तेरा ज़िक्र जब भी आया, दिल ने सुकून की सांस ली।"`
];

const color=["#008779","#f1b3a9","#0fc5e3","#ffb919","#a663cc"];

let angle=0;
const element=document.getElementById("Quote");
const show=document.getElementById("text");
const container=document.getElementsByClassName("container")[0];

element.addEventListener('click',()=>{
   const index=Math.floor((Math.random()*20));
   const i=Math.floor((Math.random()*5));
    show.textContent=arr[index];
    show.style.color=color[i];
    angle += 180; // hamesha same direction
    container.style.transform = `rotateY(${angle}deg)`;
    first.style.transform=`rotateY(${-angle}deg)`;
});

const newelement=document.getElementById("Shayari");

newelement.addEventListener('click',()=>{
   const index=Math.floor((Math.random()*20));
   const i=Math.floor((Math.random()*5));
    show.textContent=shayari[index];
    show.style.color=color[i];
    angle += 180; // hamesha same direction
    container.style.transform = `rotateY(${angle}deg)`;
    first.style.transform=`rotateY(${-angle}deg)`;
})
