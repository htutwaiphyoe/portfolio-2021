---
title: "Code smells"
date: "2023-06-23"
image: "cover.png"
description: "Code smells နဲ့ သူတို့ရဲ့ Refactoring"
topics: ["code quality", "clean code"]
readTime: 5
---

Code smells လို့ပြောရင် အနံ့ထွက်နေတဲ့ code တစ်နည်းအားဖြင့် အလုပ်တော့လုပ်ပေမယ့် code structure သို့မဟုတ် code quality အရ အားနည်းနေတဲ့ bad codeတွေလို့ မြင်ယောင်ကြည့်နိုင်ပါတယ်။ ​ကိုယ့်ရဲ့ codebase မှာ code smells တွေတွေ့ရင် ဒါဟာ ရေရှည်မှာ ပြဿနာရှိလာနိုင်တဲ့ လက္ခဏာဖြစ်ပါတယ်။ ဒီအချိန်ကြရင် refactoring စာအုပ်ထဲက **"If it stinks, change it"** ဆိုတဲ့အတိုင်း refactoring လုပ်သင့်တဲ့အချိန်ရောက်ပါပြီ။  ဒါကြောင့် Developer တစ်ယောက်အနေနဲ့ code ရေးတဲ့အခါ clean ဖြစ်အောင်ရေးနိုင်ဖို့ အပြင် ရှိပြီးသား code ကိုပြင်နိုင်ဖို့ code smells တွေကိုလည်းသိဖို့လိုအပ်လာပါတယ်။

Clean code ထဲမှာတော့ code smells ပေါင်းများစွာကို ထည့်သွင်းဖော်ပြထားပေမယ့် ဒီမှာတော့ လက်ရှိ ကိုယ်တိုင်ကြုံတွေ့ရတာတွေအပြင် developer တွေရဲ့ day to day coding မှာတွေ့ရများတဲ့ code smells တွေကို ရေးသားသွားပါ့မယ်။  

## Comment

Clean Code စာအုပ်အရ Code တစ်ခုမှာ comment ရှိနေပြီဆိုရင် ဒီcodeဟာ bad code ဖြစ်နေပြီ၊ code smell တွေရှိနေပြီဆိုပြီး ယူဆတဲ့သဘောမျိုးပါ။ ဒါကြောင့်  comment ရေးမယ့်အစား code ကိုပဲ rewrite ပြန်လုပ်ဖို့ကိုပဲ​ အကြပေးထားပါတယ်။ ဒါပေမယ့်လည်း လုံးဝကြီးမရေးခိုင်းတာမျိုးမဟုတ်ပဲ လိုအပ်လာရင်တော့ရေးရပါလိမ့်မယ်။ ဒီလိုဆိုရင်တော့ ရေးသင့်တဲ့ good comment တွေနဲ့ smells ဖြစ်စေနိုင်တယ့် bad comment တွေကို သိထားတာ ပိုကောင်းပါတယ်။ comment နဲ့ပတ်သတ်တဲ့ ဆောင်ရန်ရှောင်ရန်လေးတွေ အသေးစိတ်ကိုတော့ အရင် blog တစ်ခုမှာ ရေးထားတာရှိပါတယ်။

## Naming

naming ကတော့ syntax level ဖြစ်တဲ့အတွက် အရေးကြီးတယ့်ထဲမှာ ပါဝင်ပါတယ်။​ code ကိုဖတ်တဲ့အခါ variable တွေ function တွေက bad naming တွေဖြစ်နေရင် နားလည်ဖို့မလွယ်ကူတော့တဲ့အတွက် smells ရှိနေပါပြီ။ ဒါကို refactoring လုပ်မယ်ဆိုရင်တော့ နာမည်ပေးတဲ့အခါမှာ သက်ဆိုင်ရာ language ရဲ့ naming convention တွေနဲ့ clean code မှာဖော်ပြထားတဲ့ နာမည်ပေးနည်းလေးတွေကို follow ရပါလိမ့်မယ်။​ နာမည်ပေးရတာလည်း လွယ်မယောင်နဲ့ ခက်တဲ့အတွက် **"There are only two hard things in Computer Science: cache invalidation and naming things."** ဆိုပြီးဆိုရိုးလေးတောင်ရှိပါသေးတယ်။

```js
const n = 'Mg Mg' // bad

const name = 'Mg Mg' // good
```

## Function

function တွေကိုကြေညာတဲ့အခါ parameter တွေအများကြီးရှိနေတတ်ပါတယ်။ ဒီလို function မျိုးကို ခေါ်တဲ့အခါ parameter order မှားပေးတာမျိုးဖြစ်နိုင်ပါတယ်။ အထူးသဖြင့် JS လို dynamic type language တွေမှာ order မှားပေးတဲ့အခါ error ပြတာမျိုးမရှိတဲ့အတွက် program က misvalue ဖြစ်ပြီး လိုချင်တဲ့ result မရတာဖြစ်နိုင်ပါတယ်။ ဒါကြောင့် long parameter function တွေက code smells ထဲမှာပါဝင်ပါတယ်။  ဒီပြဿနာကိုတော့ long paramter list အစား parameter object သုံးလိုက်ရင်အဆင်ပြေသွားပါလိမ့်မယ်။ React မှာရှိတဲ့ Props object ပုံစံမျိုုးပါပဲ။

```js
function makeCircle(x, y, radius){} //bad

function makeCircle({x, y, radius}){} //good
```

funcation smell တွေနဲ့ပတ်သတ်ရင် နောက်ထပ်တွေ့လေ့ရှိတာက long function smell ပါ။  function တစ်ခုဟာ အလုပ်တွေအများကြီးလုပ်နေတဲ့အတွက်  ရှည်လာပြီဆိုရင် function ကိုဖတ်တဲ့အခါ cognitive load တွေအများကြီးသုံးရသလို maintain လုပ်ရတာလည်း မလွယ်ကူလှပါဘူး။ clean code အရဆို function တစ်ခုဟာ အလုပ်တစ်ခုပဲလုပ်သင့်ပါတယ်။​ ဒါမှသာ SRPကို follow မှာပါ။​ ဒီ smell ကို refactoring လုပ်မယ်ဆိုရင်တော့ long function ကို smaller functions တွေခွဲထုတ်လိုက်ပြီး ပြန်ပေါင်းလိုက်တာပါပဲ။​ OOP မှာတော့ God class လို့ခေါ်တဲ့  long function နဲ့ တူတဲ့ smell တစ်ခုရှိပါသေးတယ်။

## Duplication

Code duplication ကတော့ တွေ့ရအများဆုံး smell တစ်ခုပါပဲ။​ သူ့ကို root of evil လို့တောင်ဆိုကြပါတယ်။ duplication ကတော့ DRY priniple ကိုမလိုက်နာပဲ copy/paste programming လုပ်တာကနေလာတာများပါတယ်။ duplicate code တွေကို ပြန်ပြင်ချင်တဲ့အခါ သုံးတဲ့နေရာတိုင်းမှာ ပြန်လိုက်ပြင်ရပါတယ်။ same code တစ်ခုဟာ ၃ခါထက် ကျော်ပြီး တွေ့နေရရင် duplication လို့သတ်မှတ်လို့ရပါပြီ။ ဒါကို refactor မယ်ဆိုရင်တော့ abstraction layer တစ်ခုထုတ်ပြီး reusable ဖြစ်အောင်ရေးရပါလိမ့်မယ်။

## Use polymorphism for similar behavior if/switch 

code တွေထဲမှာ if/else တွေအများကြီး switch case တွေအများကြီးဖြစ်နေတာမျိုးတွေဖူးကြပါလိမ့်မယ်။ extensibility အရမကောင်းတဲ့အတွက် အဲ့ဒါတွေကလည်း code smells ထဲမှာပါဝင်ပါတယ်။  condition အလိုက်မဟုတ်ပဲ similar behavior တစ်ခုပေါ်မှာ ဖြစ်နေပြီဆိုရင် OOP မှာတော့ ploymorphism နဲ့အစားထိုးခိုင်းပါတယ်။ JS လို langauge မှာဆိုရင်တော့ duck typing ရတဲ့အတွက် mapper object သုံးလိုက်ရင်လည်း အဆင်ပြေပါတယ်။ ဒါပေမယ့်လည်း if/else နဲ့ switch ဟာ polymorphismထက် performance ပိုင်းမှာတော့ ပိုအားသာတာပါတယ်။

## Magic number, conditional

တစ်ခါတစ်လေ code ရေးတဲ့အခါ hard code လုပ်ထားတဲ့ number လေးတွေတွေ့ရတတ်တယ်။ ဥပမာ error code လိုမျိုး number တွေ၊ seconds in one hour လိုမျိုး constant number တွေ။ ဘာကိုဆိုလိုမျိုးမသိနိုင်တဲ့အတွက် magic number smell လို့ခေါ်တယ်။ သူတို့ကိုတွေရင် const variable တစ်ခုထုတ်ပြီး  refactor လုပ်လို့ရမယ်။ ထိုနည်းတူပဲ တစ်ချို့ conditional တွေက &&, || တွေအများကြီးရှိနေတဲ့အခါ ဘာကို condition စစ်မှန်းမသိနိုင်တဲ့အတွက် conditions တွေကို variable တစ်ခုဆွဲထုတ်လိုက်တာက code ရဲ့ readability ကိုတိုးသွားစေပါတယ်။

```js
// Magic number
if(errorCode === 180){} // bad

const EMAIL_EXIST_ERROR_CODE = 180
if(errorCode === EMAIL_EXIST_ERROR_CODE){} // good


// Magic conditional
if(num % 2 !== 0){} // bad

const isOdd = num % 2 !== 0
if(isOdd){} // good
```

နောက်ဆုံးကတော့ codebase ရဲ့ standard တွေကိုမလိုက်နာတာပါပဲ။ project တစ်ခုက standard တစ်ခုရှိမနေရင် ရေးတဲ့developerတွေက တစ်ယောက်တစ်မျိုးရေးသွားနိုင်ပါတယ်။ ဒီလိုဆို codebase ကို maintain ရတာ ခက်ခဲသွားနိုင်ပါတယ်။ 

Code smells တွေဟာ codebase မှာ တွေ့လာခဲ့ရင် refactoring မလုပ်နိုင်သေးသရွေ့ ပြဿနာ ဖြစ်နိုင်တယ့်အတွက် ပြန်ကောင်းအောင်ပြန်ရေးသင့်တဲ့ code တွေဖြစ်ပါတယ်။ ဒါပေမယ့်လည်း business ကိုလည်းကြည့်ရတဲ့အတွက် အချိန်သီးသန့်မရှိတာမျိုးဆိုရင်တော့ Clean code က Boyscout Rule ကိုသုံးပြီး  ရတဲ့အချိန်အတွင်းမှာတော့ တတ်နိုင်သလောက် refactoring လုပ်သွားဖို့လိုအပ်ပါတယ်။ ဒါမှသာ codebase က ဖြည်းဖြည်းချင်း quality ကောင်းလာမှာပဲဖြစ်ပါတယ်။

Comments: [https://www.htutwaiphyoe.dev/blogs/comments-in-clean-code](https://www.htutwaiphyoe.dev/blogs/comments-in-clean-code)
Boyscout rule: [https://www.htutwaiphyoe.dev/blogs/the-boyscout-rule](https://www.htutwaiphyoe.dev/blogs/the-boyscout-rule)
