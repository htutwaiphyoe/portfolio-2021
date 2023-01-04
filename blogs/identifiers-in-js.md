---
title: "JavaScript သိုင်းကျမ်း အပိုင်း (၂) - Identifiers"
date: "2021-06-29"
image: "js.png"
description: "JavaScript မှာရှိတဲ့ identifiers တွေနဲ့ သူတို့ရဲ့ use cases"
topics: ["javascript"]
readTime: 5
---
# Identifier

Identifier ဆိုတာ ထူးထူးဆန်းဆန်းတော့မဟုတ်ပါဘူး။ နာမည်တစ်ခုပါပဲ။ JavaScript မှာ variable တွေ function တွေ class တွေရဲ့ နာမည်ကို ပေးတဲ့အချိန်မှာ သူတို့ကို အသုံးပြုကြပါတယ်။ အလွယ်နည်းပြောရရင် variable ရဲ့ name တွေ functionရဲ့ name တွေဟာ သူတို့ရဲ့ identifiers တွေပါပဲ။

identifier တစ်ခုသတ်မှတ်ပေးတဲ့အခါ မဖြစ်မနေ လိုက်နာရတဲ့ rules တွေ၊ မဖြစ်မနေတော့ မဟုတ်ပေမယ့် standard အရလိုက်နာသင့်တဲ့ လုပ်ရိုးလုပ်စဉ် လေးတွေရှိတယ်။ အဲ့ဒါကို technical term အရဆို naming rules နဲ့ naming convention လို့ ခေါ်ပါတယ်။

## Naming rules

-   JavaScript ရဲ့ identifier တစ်ခုဟာ letters (a,b,c,d,..), underscore (_), dollar sign ($) တို့နဲ့ပဲ စရမယ်။
-   နောက်က character တွေကတော့ letters, underscore, number နဲ့ dollar sign တွေထဲက ကြိုက်တာဖြစ်လို့ရတယ်။
-   digits (1,2,3,..) တွေ (_), ($) မဟုတ်တဲ့ special characters တွေကို identifier ရဲ့ အစစာလုံးအဖြစ် ခွင့်မပြုထားဘူး။
-   identifier မှာ space တွေမပါရဘူး။
-   identifer တွေဟာ case-sensitive ဖြစ်တယ်။
-   နောက်ဆုံးက identifier တွေဟာ language ရဲ့ keyword နာမည်တွေနဲ့ မတူရဘူး။

```js
// valid identifers
var i$;
var my_variable_name;
var v13;
var _dummy;
var $str;

// invalid identifiers
var 1ii;
var i@aa;
var #aa;
var my name;

// age & Age are different identifers
var age;
var Age;

// error because while is keyward for while loop
var while;
```
အပေါ်က အချက်တွေဟာ rules တွေဖြစ်တဲ့အတွက် မဖြစ်မနေကို လိုက်နာရပါမယ်။ မဟုတ်ရင် error ပြတဲ့အတွက် program ကို run လို့ရမှာ မဟုတ်ပါဘူး။

## Naming Convention

-   JavaScript မှာ identifier တစ်ခုဟာ descriptive (meaningful) ဖြစ်သင့်တယ်။

```js
var n = "MgMg"; // bad
var name = "MgMg"; // good
```

-   variable ရဲ့ identifier ဆို noun ဖြစ်သင့်ပြီး boolean value ဆို verb to be + adj ဖြစ်သင့်တယ်။

```js
var age = 21;
var isMarried = false;
```

-   function အတွက် identifier တွေက verb နဲ့ စသင့်တယ်။

```js
function getName() {}
```

-   constant တွေဆိုရင် CAPITAL LETTER တွေဖြစ်သင့်တယ်။

```js
const DB_USER = "mgmg";
```

-   class name တွေသည် အစစာလုံးက Captial ဖြစ်သင့်တယ်။

```js
class Person {}
```

အပေါ်က အချက်တွေဟာ convention တွေဖြစ်တဲ့အတွက် မဖြစ်မနေ လိုက်နာစရာတော့မလိုအပ်ပါဘူး။ ဆိုလိုတာက နာမည်ကို ကြိုက်သလိုပေးလို့ရပါတယ်။ rules နဲ့ကိုက်သ၍ program run လို့ရနေမှာပါ။ ဒါဆိုဘာလို့ convention တွေ standard တွေသတ်မှတ်နေသေးလဲမေးစရာရှိပါတယ်။ အဓိက ကတော့ code ရဲ့ readability နဲ့ understandability အတွက်ပါ။ real world project ရေးတဲ့အခါ တစ်ယောက်တည်း မရေးရတော့ပါဘူး။ အများနဲ့ တွဲရေးရတာဖြစ်တဲ့အတွက် ကိုယ့် code ကို ကိုယ်နားလည်ဖို့အပြင် အခြားသူနားလည်ဖို့ လိုအပ်ပါတယ်။ မဟုတ်ရင် syntax ကိုနားလည်အောင်လုပ်တာနဲ့တင် ကြာနေမှာပါ။

## Identifier Cases

Naming convention အရ identifier တွေကို meaningful ဖြစ်အောင်ရေးရတဲ့အခါ identifier တွေဟာ စကားလုံးတစ်လုံးထက်ပိုလာပါတယ်။
ဥပမာ database ထဲက  user ကို email နဲ့ဆွဲထုတ်တဲ့ function အတွက် identifier ပေးမယ်ဆိုရင် get user by email လို့ပေးမှ အဓိပ္ပာယ်ပြည့်စုံမှာပါ။ ဒီလို multiple words identifer ဖြစ်လာတဲ့အခါ readability အတွက် သူတို့ကိုရေးတဲ့ format တွေပေါ်လာပါတယ်။

### snake_case

သူ့ရဲ့ပုံစံက ရှည်လျားပြီး အဆစ်တွေဆက်ထားတဲ့ မြွေအရုပ်နဲ့တူပါတယ်။ identifier ရဲ့ word တွေကို တစ်ခုနဲ့တစ်ခု nonalphanumeric character နဲ့ ဆက်ပြီးရေးရပါတယ်။ identifer ရဲ့ rules အရ space သုံးလို့ မရတဲ့အတွက် snake_case မှာတော့ underscore (_) ကိုသုံးပါတယ်။ ဒီနည်းနဲ့ရေးရင် အပေါ်က function ဟာ get_user_by_email ဆိုပြီးဖြစ်သွားမှာပါ။ C, C++, Python တို့မှာ ဒီနည်းကို သုံးကြပါတယ်။

### kebab-case

kebab-case က snake_case နဲ့ ပုံစံတူပါတယ်။ word တွေကို nonalphanumeric characterနဲ့ ဆက်တာပါပဲ။ မတူတာကတော့ underscore(_) အစား dash(-) ကိုသုံးရေးတာပါ။ ဒီနည်းနဲ့ရေးရင် အပေါ်က function ဟာ get-user-by-email ဆိုပြီးဖြစ်သွားမှာပါ။ 
JavaScript မှာတော့ ဒီ case ဟာ invalid ဖြစ်ပါတယ်။

### camelCase

သူ့ပုံစံက ကုလားအုတ်တစ်ကောင်ရဲ့ ခန္ဓာကိုယ်နဲ့တူပါတယ်။ အမြှီးနဲ့ လည်ပင်းပိုင်းမှာ ချပ်နေပြီး ကျောကုန်းမှာ ဘို့ကြောင့် ခုံးနေတဲ့ပုံစံမျိုးပါ။ သူ့ပုံစံနဲ့ identifier ရေးမယ်ဆိုရင် word တွေကို တစ်ခုနဲ့တစ်ခုကပ်ရေးပြီး ပထမစကားလုံးကလွဲလို့ ကျန်တဲ့စကားလုံးတွေရဲ့ ပထမစာလုံးတွေကို အကြီးနဲ့ရေးရပါတယ်။ ဒီနည်းနဲ့ရေးရင် အပေါ်က function ဟာ getUserByEmail ဆိုပြီးဖြစ်သွားမှာပါ။ JavaScript, PHP နဲ့ Java တို့မှာ အသုံးများကြပါတယ်။


### PascalCase

ဒီ case က camelCase နဲ့ ပုံစံတူတူပါပဲ။ အဓိက ကွဲသွားတာက ဒီနည်းမှာ စကားလုံးတိုင်းရဲ့ ပထမစာလုံးတိုင်းဟာ အကြီးဖြစ်သွားတာပါ။ ဒီနည်းနဲ့ရေးရင် အပေါ်က function ဟာ GetUserByEmail ဆိုပြီးဖြစ်သွားမှာပါ။ ဒီနည်းကိုတော့ class name တွေပေးတဲ့အခါမှာ အသုံးများကြပါတယ်။

### MACRO_CASE

ဒီနည်းက snake_case ကိုမှ စာလုံးတိုင်းကို အကြီးပြောင်းလိုက်တာပါ။ ဒီနည်းနဲ့ရေးရင် အပေါ်က function ဟာ GET_USER_BY_EMAIL ဆိုပြီးဖြစ်သွားမှာပါ။ သူ့ကိုတော့ CONST variable တွေပေးတဲ့အခါမှာ သုံးကြပါတယ်။

### flatcase

သူ့ကတော့ camelCase ပုံစံကိုမှ စာလုံးတိုင်းကို အသေးတွေနဲ့ပဲရေးတာပါ။ ဒီနည်းနဲ့ရေးရင် အပေါ်က function ဟာ getuserbyemail ဆိုပြီးဖြစ်သွားမှာပါ။ flatcase ကိုတော့ Java ရဲ့ package name တွေမှာ တွေ့ရပါတယ်။


အပေါ်က case တွေဟာ အသုံးများတဲ့ case တွေကိုဖော်ပြထားတာပါ။ langauge standard အရသတ်မှတ်ထားပေမယ့် language တစ်ခုဟာ case တစ်ခုပဲသုံးရမယ်လို့တော့ မရှိပါဘူး။ project ရေးတဲ့ team ရဲ့ standard ပေါ်မူတည်ပြီး အပြောင်းအလဲရှိပါလိမ့်မယ်။

