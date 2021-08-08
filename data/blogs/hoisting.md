---
title: "JavaScript သိုင်းကျမ်း အပိုင်း (၄) - Hoisting"
date: "2021-07-10"
image: "js.png"
description: "JavaScript ရဲ့ ထူးခြားတဲ့ feature တစ်ခုဖြစ်တဲ့ hoisting အကြောင်း"
topics: ["javascript"]
readTime: 6
---

# Hosting ဆိုတာဘာလဲ။

Hoisting အကြောင်းသိဖို့ဆိုရင် အရင်ဆုံး JavaScript ဟာ runtime မှာဘယ်လိုအလုပ်လုပ်လဲဆိုတာကို နားလည်ဖို့လိုပါတယ်။ ဒီနေရာမှာ runtime ကို တစ်ခုလုံးအသေးစိတ်ရှင်းပြလိုက်ရင် စာအရမ်းရှည်သွားမှာဆိုးလို့ hoisting နဲ့ပတ်သတ်တာလေးပဲ ပြောသွားပါ့မယ်။ JavaScript Engine ဟာ JIT (Just-in-time) compilation ကိုသုံးပါတယ်။ code တွေကို compiled လုပ်ပြီးတဲ့အခါ run ဖို့ portable file တစ်ခုမဆောက်တော့ဘဲ တန်းပြီး execution လုပ်ပါတယ်။ execute စလုပ်ဖို့အတွက် အရင်ဆုံး execution stack ထဲမှာ global execution context ကို create လုပ်ပါတယ်။ သူ့အထဲမှာတော့ top-level code တွေကို execute ပါတယ်။ ပြီးရင်တော့ function တစ်ခုချင်းဆီအတွက် execution context တစ်ခုဆီကိုဆောက်ပြီး stack ပေါ်တင် run ပါတယ်။ execution context မှာ phase နှစ်ခုရှိပါတယ်။ creation phase နဲ့ execution phase ပါ။ creation phase ကတော့ function ကို run ဖို့အတွက် လိုအပ်တဲ့ အရာတွေမှန်သမျှကို generate လုပ်ပါတယ်။ ဘာတွေလည်းဆိုရင် ပထမတစ်ခုက variable environment object ပါ။ သူ့က function ထဲမှာရှိတဲ့ variables,function declaration တွေနဲ့ function ရဲ့ argument object ကို သိမ်းပါတယ်။ ဒုတိယက scope chain ပါ။ နောက်ဆုံးကတော့ **this** variable ပါ။

Hoisting ဆိုတာက variable တွေ function တွေကို သူတို့ declaration မတိုင်ခင်မှာ သုံးလို့ရအောင်လုပ်တာပါ။ ဆိုလိုတာက variable တွေကို သူတို့ရဲ့ scope ရဲ့ ထိပ်ဆီ ရွေ့လိုက်တာပါ။ function မှာဆို function ရဲ့ထိပ်ဆုံးပေါ့။ ဘယ်လိုလုပ်လိုက်လည်းဆိုတော့ execution မလုပ်မှီ function ထဲမှာရှိတဲ့ variable declaration တွေကို scan ပါတယ်။ ပြီးရင် တွေ့တဲ့ variable တစ်ခုဆီအတွက် variable environment object မှာ property တစ်ခုဆီ creation လုပ်ပါတယ်။ function declaration တွေလည်းထိုနည်းတူပါပဲ။

## How does **Hoisting** work?

### function declaration

code ကို scan တဲ့ အခါ function declaration ကိုတွေ့ရင် hoisting လုပ်ပါတယ်။ သူ့ကို variable environment မှာ property အနေနဲ့ သိမ်းပြီး သူ့ရဲ့ initial value မှာ actual function တစ်ခုလုံးကို ပေးပါတယ်။ အဲ့ဒါကြောင့် function declaration တွေကို သူတို့ရဲ့ actual code မတိုင်မှီ ခေါ်သုံးလို့ရပါတယ်။

```js
sayHello(); // output: Hello, world!
function sayHello() {
    console.log("Hello, world!");
}
```

### variable declaration with **var** keyword

var keyword နဲ့ ကြေညာထားတဲ့ variable တွေကလည်း hoisted ဖြစ်ပါတယ်။ ဒါပေမယ့် function တုန်းကလိုတော့မဟုတ်တော့ပါဘူး။ သူကြတော့ initial value မှာ actual value မပေးဘဲ **undefined** ပဲပေးပါတယ်။ ဒါကြောင့် var နဲ့ ကြေညာတဲ့ variable declaration တွေမှာ သူတို့ရဲ့ declaration code မတိုင်မှီ ခေါ်ရင် undefined ရတာပါ။

```js
console.log(isHoisted); // output: undefined
var isHoisted = true;
```

### variable declaration with **let** keyword and **const** keyword

let နဲ့ const keywords သုံးပြီး ကြေညာထားတဲ့ variable တွေကလည်း hoisted ဖြစ်ပါတယ်။ ဒါပေမယ့် var တုန်းကလို initial value ကို undefined မပေးတော့ပဲ JavaScript engine ကနေ သူတို့ရဲ့ value ကို **uninitialized** လို့သတ်မှတ်လိုက်ပါတယ်။ ဒါကြောင့် သူတို့ကို actual declaration code မတိုင်မှီခေါ်ကြည့်ရင် **undefined** အစား **ReferenceError: Cannot access variable before initialization** ဆိုတဲ့ error ပြပါတယ်။ ဆိုလိုတာက hositing လုပ်ထားပေမယ့် actual declaration code မတိုင်မှီ ခေါ်မသုံးနိုင်ဘူးလို့ပြောတာပါ။

```js
// Cannot access 'isHoisted2' before initialization
console.log(isHoisted);
let isHoisted = true;
```

### Temporal Dead Zone (TDZ)

var တုန်းကလို ခေါ်သုံးလို့ဘာလို့မရတာလဲဆိုရင် **Temporal Dead Zone (TDZ)** ထဲရောက်နေလို့ပါ။ TDZ က variable တွေကို scope ရဲ့ အစနဲ့ သူတို့ရဲ့ actual declaration code ရဲ့ ကြားအတွင်းမှာ access လုပ်ခွင့်မရအောင်လုပ်ထားတဲ့ အချိန်အပိုင်းအခြား တစ်ခုပါ။ နောက်တစ်ခုက temporal dead zone က related with time ပါ။ spatial မဟုတ်ပါဘူး။ ဆိုလိုတာက variable ကို access လုပ်လို့မရတဲ့ time duration ကိုပြောတာပါ။ vaiable ကို သုံးလို့မရတဲ့ နေရာကိုပြောတာမဟုတ်ပါဘူး။ ဥပမာ ကြည့်လိုက်ရင် ပိုရှင်းမယ်ထင်ပါတယ်။

```js
function sayHello() {
    function f() {
        console.log(value);
    }
    let value = "Hello, world!";
    f();
}
sayHello();

// output: Hello, world!
```

ဒီ code မှာဆိုရင် value ဆိုတဲ့ variable ကို actual declaration codeမတိုင်ခင်ခေါ်သုံးထားပါတယ်။ တကယ်လို့သာ TDZ ဟာ spatial (နေရာနဲ့ဆိုင်ရင်) ဒီ code ဟာ run လို့ရမှာမဟုတ်ပါဘူး။ ဒါပေမယ့် TDZ ဟာ temporal ဖြစ်တဲ့အတွက် run လို့ရပါတယ်။ ဒီမှာဆို f() ဟာ actual declaration code ကို run ပြီးမှ ခေါ်တဲ့အတွက် value ကို output ပြလို့ရသွားပါတယ်။ တကယ်လို့သာf() ကို actual declaration code ရဲ့အပေါ်မှာ ခေါ်ထားရင် လုံးဝ run လို့ရမှာမဟုတ်ပါဘူး။ ဆိုလိုတာကတော့ actual declaration code ရဲ့အပေါ်မှာ ရေးထားတိုင်း error မတက်ပါဘူး။ actual declaration code ရဲ့အပေါ်မှာ ရေးထားပေမယ့် actual declaration code run ပြီးမှ ခေါ်သုံးတာမျိုးဆိုရတယ်လို့ ပြချင်တာပါ။ အဲ့ဒါကြောင့် TDZ ဟာ code ရေးထားတဲ့နေရာ spatial နဲ့ မဆိုင်ဘူးလို့ အပေါ်မှာပြောခဲ့တာပါ။

### function expression

function expression ကတော့ ပုံမှန် variable ဖြစ်တဲ့အတွက် သူ့ကိုကြေညာတဲ့အခါသုံးထားတဲ့ keyword ပေါ်မူတည်သွားပါတယ်။

```js
f();
var f = function () {
    console.log("Hello, world");
};
```

အပေါ်က code ကို run ရင် **TypeError: f is not a function** error ပြပါတယ်။ f က ဘာလို့ function မဟုတ်လည်းဆိုတော့ var နဲ့ကြေညာထားတဲ့အတွက် initial value က undefined ဖြစ်နေလို့ပါ။

```js
f();
const f = function () {
    console.log("Hello, world");
};
```

ဒီ code ကတော့ **ReferenceError: Cannot access 'f' before initialization** error ပြပါတယ်။ ဘာလို့လဲဆိုတော့ let, const နဲ့ ကြေညာထားတဲ့အတွက် f ဟာ TDZ မှာရှိနေပြီး ခေါ်မရလို့ပါ။

best practices တွေ အနေနဲ့ကတော့ var အစား let, const တို့ကိုပဲသုံးတာမျိုး၊ function declaration မတိုင်ခင် function ကို invocation မလုပ်တာမျိုး တို့ပါ။
