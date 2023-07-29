---
title: "JavaScript သိုင်းကျမ်း အပိုင်း (၃) - Automatic semicolon insertion"
date: "2021-07-03"
image: "cover.png"
description: "JavaScript မှာရှိတဲ့ optional semicolon အကြောင်း"
topics: ["javascript"]
readTime: 5
---

# Semicolons

Semicolon ကတော့ programmer တွေကိုတော်တော်ဒုက္ခပေးခဲ့တဲ့အရာလို့ဆိုလို့ရပါတယ်။ programming ကိုလေ့လာကာစအချိန်တုန်းက semicolon ကျန်ခဲ့လို့ compile error တက်တာကိုအဖြေရှာရင်း အချိန်ကုန်ခဲ့တာကို computer science ကျောင်းသား တွေ တော်တော်များများခံစားခဲ့ဖူးမှာပါ။ အဲ့ဒီ experience တွေကပဲ Semicolon ကို အမြဲထည့်တဲ့အကျင့်ရသွားကြတာများပါတယ်။

## Why semicolon is needed

semicolon ကို program ရဲ့ statement တွေမှာ terminator or separator အဖြစ်အသုံးပြုပါတယ်။ ဒီလိုသုံးခြင်းအားဖြင့် compiler or interpreter ကို ဘယ် statement က ဘယ်မှာဆုံးတယ် နောက်တစ်ကြောင်းကဘယ်မှာစတယ် စတာတွေကို အလွယ်တကူ နားလည်စေပါတယ်။ ဒါ့အပြင် code ရဲ့ structure နဲ့ readibility ကိုလည်းတိုးသွားစေပါတယ်။​ ဘာသာစကားတွေမှာ စာရေးတဲ့အခါ ပုဒ်ဖြတ်ပုဒ်ရပ်သင်္ကေတတွေကို သုံးရသလိုပါပဲ။ ဥပမာ မြန်မာမှာဆို ပုဒ်ကလေး (၊) ပုဒ်မ (။) လိုဟာတွေပေါ့။

C-like language တွေဖြစ်တဲ့C,C++, Java, PHP တို့မှာsemicolon ကို မဖြစ်မနေ ထည့်ပေးရပေမယ့် python လို language မှာတော့ semicolon ထည့်ပေးစရာမလိုပါဘူး။ JavaScript မှာတော့ semicolon က optional ပါ။ ထည့်လည်းရသလို JavaScript ကနေ auto insertion လုပ်ပေးတဲ့အတွက် omit လုပ်လို့လည်းရပါတယ်။ ဒါပေမယ့် manually မဖြစ်မနေထည့်ပေးဖို့လိုတဲ့ နေရာတွေရှိပါတယ်။

## How automatic semicolon insertion algorithm works

Program ရဲ့ အဆုံး ဒါမှမဟုတ် next token က closing curly brace (}) ဖြစ်ရင် semicolon ကို omit လို့ရပါတယ်။

```js
function addNumbers(a, b) {
    // next token is }
    return a + b
}

// end of program
console.log(addNumbers(1, 2))
```

JS မှာ statement နှစ်ခုဟာ separate lines ဖြစ်နေရင် first statement ရဲ့ semicolon ကို omit လို့ရပါတယ်။

```js
// written
let a = 3
let b = 4;

// interpret to
let a = 3;
let b = 4;
```

statement နှစ်ခုဟာ single line ဖြစ်နေရင်တော့ first statement ရဲ့ semicolon ကို manually ထည့်ပေးရပါမယ်။

```js
let a = 3; let b = 4;
```

JavaScript မှာ link break တိုင်းကို semicolon မထည့်ပါဘူး။ JS interpreter ဟာ code တစ်ကြောင်းဖတ်ပြီး ; နဲ့ မဆုံးပဲ next line ဆင်းထားရင် next line က character ကို အပေါ်က statement ရဲ့ အဆက် အဖြစ် interpret လုပ်ရမရစစ်ပါတယ်။ ရရင် line break မလုပ်ဘဲ ဆက်ဖတ်သွားပြီး မရရင် line break အဖြစ်သတ်မှတ်ကာ semicolon ကို insertion လုပ်ပါတယ်။

```js
// written
let a
a 
= 
3
console.log(a)

// interpret to
let a;
a = 3;
console.log(a);
```

အပေါ်က code မှာ ဆို first line ကို line break အဖြစ် သတ်မှတ်ပါတယ်။ let a a ကို parse မရလို့ပါ။ ဒုတိယက a ဆို a; လို့ လုပ်လို့ရပေမယ့် next character တွေက a ရဲ့ continuation အဖြစ် parse လို့ရနေတဲ့အတွက် a = 3 ထိ parse လိုက်ပါတယ်။

```js
// written
let y = x + f
(a + b).toString()

// interpret to
let y = x + f(a + b).toString();
```

ဒီ code မှာဆိုလည်း အောက်က parentheses က အပေါ်က f ရဲ့ function invocation အဖြစ်လုပ်လို့ရနေတဲ့အတွက် JavaScript ဟာ continuation အဖြစ်သတ်မှတ်ပြီး first line ကို line break မလုပ်တော့ပါဘူး။

ယေဘုယျအနေနဲ့ +, ,-, /, (,[ တို့နဲ့စတဲ့ statement တွေဆို continuation အဖြစ် interpretation လုပ်နိုင်ပါတယ်။ continuation အဖြစ်မလုပ်စေချင်ရင်တော့ next line ရဲ့အစမှာ defensive semicolon ထည့်ပေးလို့ရပါတယ်။

```js
let x = 0 // Semicolon omitted here
;[x, x + 1, x + 2].forEach(console.log) // Defensive ; keeps this statement separate
```

JS မှာ next line ဟာ continuation အဖြစ် parsing လုပ်လို့ရသော်လည်း ဆက်မဖတ်တော့ပဲ line break အဖြစ် သတ်မှတ်ပြီး auto insertion လုပ်ဖို့အတွက် ကန့်သတ်ထားတဲ့ exceptions သုံးခုရှိပါတယ်။

ပထမကတော့ return, throw, yield, break, continue တို့ရဲ့ အဆုံးမှာအမြဲ semicolon ထည့်ပါတယ်။ အဲ့ဒါကြောင့် နောက်မှာ expression ပါရင် same line မှာရေးမှရပါမယ်။

```js
// written
return
true;

// excepted
return true;

//interpret to
return;
true;
```

ဒုတိယက ++, -- တို့မှာ postfix အနေနဲ့သုံးချင်ရင် operand နဲ့ operator တို့ကို same line မှာပဲရေးမှရပါမယ်။ ဒါမှမဟုတ်ရင် operand နောက်မှာ auto insertion လုပ်ပြီး operator က သူ့နောက်ကcode နဲ့ပေါင်းကာ prefix အနေနဲ့ parse သွားတတ်လို့ပါ။

```js
let x = 1,
    y = 1;

// written
x
++
y

// excepted
x++;
y;

// interpret to
x;
++y; // x = 1, y = 2
```

နောက်ဆုံးကတော့ ES6 ရဲ့ arrow function မှာ parameter list နဲ့ arrow (=>) နဲ့ကို single line အဖြစ်ရေးရမှာပါ မဟုတ်ရင် ()နောက်မှာ semicolon ထည့်လိုက်တဲ့အတွက် syntax error ပြပါလိမ့်မယ်။

```js
// written
let fn = ()
=> {

}

// interpret to
let fn = ();
=> { // error

}
```

အခုနောက်ပိုင်း vscode မှာ prettier လို formatter ပေါ်လာတဲ့အတွက် semicolon ကနေ ပြဿနာပေးတာမျိုးမရှိတော့ပါဘူး။ ဒါပေမယ့် အပေါ်က နည်းလမ်းတွေသိထားရင်တော့ အထူးသဖြင့် python ကလာတဲ့သူတွေအတွက် JavaScript မှာ semicolon နဲ့ပတ်သတ်တဲ့ error တွေ bug တွေရှောင်ရှားပြီးသားဖြစ်သွားမှာပါလိမ့်မယ်။
