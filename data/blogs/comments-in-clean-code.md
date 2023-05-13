---
title: "Comments in clean code"
date: "2023-05-18"
image: "cover.png"
description: "Clean code မှာ ရှင်းပြထားတဲ့ comment အကြောင်း"
topics: ["code quality", "clean code"]
readTime: 8
---

Developers တွေရဲ့ daily life မှာ code ဖတ်ရတဲ့အခါ comment တွေကို တွဲပြီးတွေ့ရလေ့ရှိတယ်။​ comment ဆိုတာက code တွေထဲမှာ  ရေးထားတဲ့ စာသား (a piece of text or description) လေးတွေဖြစ်တယ်။ အဓိကက program source code ရဲ့ လုပ်ဆောင်ချက်ကို တခြား developers တွေဖတ်တဲ့အခါ နားလည်လွယ်ဖို့ ရေးထားတဲ့ human-readable information တွေလို့တစ်နည်းပြောလို့ရတယ်။ additional annotation တွေဖြစ်တဲ့အတွက် compiler or interpreter က program ကို run တဲ့အခါ ignore လုပ်သွားတယ်။ Comment အကြောင်းကို ပိုပြီးသိချင်ရင် အရင်တုန်းက ရေးဖူးတဲ့ **Comment in JS** ဆိုတဲ့ blog လေးရှိတယ်။​ ဖတ်ချင်ရင် ဒီ link မှာဝင်ကြည့်လိုက်ပါ။

[Comments in JS](https://www.htutwaiphyoe.dev/blogs/comments-in-js)

ရှေမှာပြောခဲ့သလိုပဲ comment ရေးရတဲ့ ရည်ရွယ်ချက်က code ရဲ့ readability နဲ့ understandability တိုးလာစေဖို့ပါ။ ဒါပေမယ့် ပြဿနာက နေရာတိုင်း comment လိုက်ရေးနေပြန်ရင်လည်း ဖတ်ရသူအတွက် code က မျက်စိထဲ ခေါင်းထဲမှာ ရှုပ်သွားစေတာမျိုးဖြစ်နိုင်တယ်။ ရေးတဲ့သူဘက်က comment ကို သေသေချာချာ ဂရုတစိုက်ရေးထားတာမျိုးဆို အကူအညီဖြစ်ပေမယ့် တစ်ခါတစ်လေ အမှားတွေရေးထားခဲ့ရင် misinformation ဖြစ်ပြီး program ရဲ့ intent ကိုပါ လွဲသွားနိုင်စေပါတယ်။ ဒါကြောင့်ပဲ​ **"Code never lies, comments sometimes do."** ဆိုပြီး ဆိုရိုးတစ်ခု ပေါ်လာခဲ့တာပါ။

Uncle Bob ရဲ့ Clean Code စာအုပ်အရ အစမှာတင်ကို **"Don't comment bad code - rewrite it"** ဆိုပြီးတော့ကိုပြောထားတယ်။ Code တစ်ခုမှာ comment ရှိနေပြီဆိုကတည်းက ဒီcodeဟာ bad code ဖြစ်နေပြီ၊ code smell တွေရှိနေပြီဆိုပြီး ယူဆတဲ့သဘောမျိုးပါ။ တတ်နိုင်သမျှ program ရဲ့ intent ကို code ထဲမှာပဲ clean code principle တွေသုံးပြီး ရှင်းရှင်းလင်းလင်းနဲ့ နားလည်နိုင်အောင် ရေးပါလို့ ပြောထားတယ်။ လုံးဝကြီးမရေးခိုင်းတာမျိုးတော့မဟုတ်ပေမယ့် ဖြစ်နိုင်သမျှ comment ကိုမရေးစေချင်တဲ့သဘောပါပဲ။ သို့ပေမယ့် ကာလံဒေသံအရ  ဆောင်ရန်ရှောင်ရန် comment လေးတွေကိုလည်း ထည့်ရှင်းပါထားသေးတယ်။

Clean code ထဲမှာတော့ Good and Bad comment ဆိုပြီး list လေးထုတ်ပေးထားတယ်။ Good comment ထဲမှာ ဘာတွေပါလည်းဆိုရင်

1. Legal comments

Organzation အရပဲဖြစ်ဖြစ် open-source ကြောင့်ပဲဖြစ်ဖြစ် တစ်ခါတစ်လေမှာ copyright တို့ license တို့လို legal purpose အရရေးရတဲ့ comment မျိုးဆိုရေးသင့်တယ်လို့ပြောတယ်။

2. Informative comments

တစ်ခါတစ်လေမှာ ရေးရတဲ့ code အရကို နားလည်ရခက်တဲ့တာမျိုးတွေရှိတတ်တယ်။ ဥပမာ Regex လို nondescriptive ဖြစ်တဲ့ကောင်မျိုးတွေဆို specific format အတွက်ရေးထားရင် comment တစ်ကြောင်းလောက်ရေးလိုက်တာက ပိုပြီးနားလည်လွယ်နိုင်ပါတယ်။

3. Explanation of intent

business ရဲ့ logic ကိုက complex algorithm ဖြစ်နေရင်လည်း documentation မရှိခဲ့ရင် intent ကိုဖော်ပြတဲ့ summary comment ရေးလိုက်တာက ပိုကောင်းသွားစေမှာပါ။

4. Clarification comments

နောက်တစ်ခုက အပြင်က third-party api တွေနဲ့ချိတ်ဆက်ရတာမျိုးမှာ သူတို့ဘက်ကသတ်မှတ်ထားတဲ့ rule တွေ standard တွေရှိတတ်တယ်။ ဒီလိုချိန်ကြရင် ကိုယ့်ရဲ့ code ထဲမှာ ဘာကြောင့်ဒီလိုရေးရပါတယ်ဆိုတဲ့ comment မျိုးရေးတာမျိုး ဒါမှမဟုတ် သူတို့ရဲ့ docs link ကို reference ထည့်ထားတာမျိုးလုပ်သင့်တယ်လို့ပြောပါတယ်။ ဥပမာ Stripe မှာဆိုရင် ဘယ် error code က ဘာ error ကိုဆိုလိုတာမျိုးပေါ့။

5. Warning & Todo comments

program ကို run လိုက်ရင် ဘာဖြစ်နိုင်ပါတယ်ဆိုတဲ့ consequence အရ warning comment တွေထည့်ရတဲ့မျိုးလည်းရှိနိုင်တယ်။ real world မှာ business flow အရ feature ရေးရတဲ့ အပိုင်းတစ်ပိုင်းကိုပဲ အရင် release ချင်တဲ့အခါ နောက်ရေးရမယ့်အပိုင်းအတွက် Todo comment လေးရေးထားလိုက်ရင် teamထဲက အခြားသူတွေက လုပ်ရမယ့် process ကို အလွယ်တကူသိသွားစေနိုင်ပါတယ်။

6. Amplication & Documentation comments

နောက်ဆုံးက function/method တွေမှာ တခြားသူတွေပိုနားလည်အောင် explanation purpose အရထည့်တာမျိုး၊ public API method တွေမှာ inline documentation အနေနဲ့ docs comment ကို ရေးကြတာမျိုးလည်းရှိတတ်တယ်။ အများအားဖြင့် library တွေ framework တွေ ရဲ့ source code တွေမှာ အများဆုံးတွေ့ရတယ်။ JS နဲ့ပတ်သတ်ရင် JS docs ဆိုပြီးထုတ်ထားတာရှိတယ်။ ဖတ်ကြည့်ချင်ရင် အပေါ်က comment in js blog ထဲမှာရှိပါတယ်။

ဘယ် Bad comment မျိုးကိုမရေးသင့်လည်းဆိုရင်တော့

1. Redundant and Misleading comments

code မှာ for loop ပတ်ထားတာကို // loop the array ဆိုပြီးရှင်းပြထားသလိုမျိုး code နဲ့ comment ထပ်နေတာတွေမရေးသင့်ဘူး။ နောက်တစ်ခုက အခြားသူကိုအမြင်မှားစေနိုင်တဲ့ တလွဲcomment မျိုးတွေလည်းမရေးသင့်ပါဘူး။

2. Mandated and Journal comments

function တိုင်းမှာ docs comment မဖြစ်မနေရေးရမယ်ဆိုပြီး မလိုအပ်တဲ့ rule တွေပြဌာန်းထားတာမျိုးကို ရှောင်သင့်ပါတယ်။ အရင်တုန်းက code မှာ changes တိုင်းအတွက် log လိုမျိုး comment တွေရေးခဲ့ကြတာရှိတယ်။ ဒါပေမယ့် အခုချိန်မှာတော့ git လို version control system တွေရှိလာပြီမလို့ journal comment တွေကလည်း မလိုအပ်တော့ပါဘူး။ git commit message တွေကိုတော့ သေချာလေးရေးရပါလိမ့်မယ်။

3. Noise and Scary noise comments

noise and scary noise comment ဆိုတာက ရေးလည်းမထူးတဲ့ comment မျိုးတွေကို ဆိုလိုတာပါ။ ​ဥပမာ variable ကြေညာထားတာကို // define variable ဆိုပြီးရေးတာမျိုးပေါ့။ redundant နဲ့နည်းနည်းဆင်ပါတယ်။ 

4. Position marker and closing brace comments

တစ်ခါတစ်ရံ code block လေးတွေပိုင်းတဲ့အခါ သူတို့အပေါ်မှာ ဘာblock နေရာမှန်းအောင်ရေးတာမျိုးရှိတယ် (eg. /// style ///)။ အစကတည်းက code block တွေကိုတူရာစုလိုက်ထားတယ်ဆိုရင် ကြည့်လိုက်တာနဲ့ ချက်ချင်းသိတဲ့အတွက် comment ရေးစရာမလိုပါဘူး။ နောက်တစ်မျိုးက long function တို့ neseted blocks တွေရဲ့ brace အဆုံးမှာ comment ရေးတာမျိုးရှိတတ်တယ် (eg. // try)။ ဒီလိုမျိုးကြရင် comment အစား shorter function တွေခွဲရေးလိုက်တာ refactroing လုပ်လိုက်တာက ပိုကောင်းပါလိမ့်မယ်။ ကိုယ်တိုင်တော့ C# code တွေမှာ block region တွေရေးတာတွေ့ဖူးတယ် (eg. #region, #endregion)။ အခုနောက်ပိုင်းတော့ vscode လို modern editor/IDE တွေမှာ code block တွေအတွက် color highlight လုပ်ပေးတဲ့ extension တွေရှိလာပါပြီ။

5. Comment-out code

Clean code အရတော့ commented code တွေကို ဖျက်ပစ်ဖို့ ပြောတယ်။ လိုအပ်လာရင် git လိုကောင်မျိုးရှိတဲ့အတွက် အလွယ်တကူပြန်ယူလို့ရမယ်။ ဒါပေမယ့် project requiremnt အရ ယာယီ ဖျောက်ထားချင်တဲ့ feature တွေလည်းရှိတတ်တော့ အခြေအနေအချိန်အခါကိုကြည့်ပြီး ဖျက်လို့ရရင်ဖျက် မဟုတ်ရင်လည်း warning comment လေးရေးထားလိုက်တာက အကောင်းဆုံးဖြစ်ပါလိမ့်မယ်။

6. Non-local and Too much information

နောက်ဆုံးကတော့ လက်ရှိရေးနေတဲ့ code နဲ့မဆိုင်တဲ့ comment တွေလည်းမရေးသင့်သလို ဆိုင်တော့ဆိုင်ပေမယ့်လည်း comment ကို essay ရေးသလိုရေးပြီး actual code ထက် အရှည်ကြီးဖြစ်နေတာမျိုးကိုလည်း ရှောင်သင့်ပါတယ်။ မဟုတ်ရင် comment ရေးနေတာနဲ့တင် အချိန်ကုန်ပြီး task လည်း မပြီးတော့သလို ဘယ်သူကမှလည်း ဖတ်ချင်တော့မှာ မဟုတ်ပါဘူး။ အများကြီးရေးနေရရင် documentation ထုတ်လိုက်တာပိုအဆင်ပြေပါလိမ့်မယ်။

Clean code အရ မလိုအပ်ပဲ comment မရေးနဲ့ဆိုလို့ လှေနံဓားထစ်ပြီး လုံးဝမရေးပဲတော့မနေစေချင်ပါဘူး။ တစ်ခါတစ်လေ organizational standard အရ ရေးကိုရေးတဲ့အချိန်ရှိပါတယ်။ အထူးသဖြင့် foreign ဖြစ်တဲ့ Japan company တွေမှာဆိုပိုပြီး တွေ့ရများတယ်လို့ သိရတယ်။ ဒါမျိုးဆို မရေးချင်လည်း ရေးရတော့မှာပါ။

အကျဉ်းချုပ်ရရင် clean code ရဲ့ ဆိုလိုရင်းကတော့ comment ရေးရမလား မရေးရဘူးလား စဉ်းစားဖို့ က code နဲ့ ကိုယ်စားပြုပြီး ရှင်းပြလို့ရအောင်အရင်ရေးကြည့်ပြီး မရတော့တဲ့အဆုံးကြမှ comment ကိုရေးစေချင်တာပါပဲ။​ ကိုယ်တိုင်တော့ အရင်တုန်းက comment တွေရေးခဲ့ဖူးပေမယ့် အခုချိန်တော့ clean code အတိုင်း လိုအပ်မှပဲရေးပါတော့တယ်။ သို့ပေမယ့်လည်း Uncle Bob ကဘယ်လိုပဲပြောထားပါစေ လူတစ်ယောက်နဲ့ တစ်ယောက် perspective တွေမတူနိုင်သလို မိမိလုပ်နေတဲ့ company ရဲ့ project standard တွေလည်း ကွဲပြားနိုင်တဲ့တွက် comment ရေးခြင်း မရေးမခြင်းသည် မိမိကိုယ်တိုင်ပေါ်မှာပဲမူတည်ပါလိမ့်မယ်။

ဒီလောက်ဆို comment နဲ့ပတ်သတ်တာ တော်တော်လေးပြည့်စုံသွားပါပြီ။ Clean code စာအုပ်ကို reference ယူပြီး ကိုယ်တိုင်သင်ယူမိသမျှနဲ့ အတွေ့အကြုံလေးတွေ ပေါင်းပြီးရေးထားတာဖြစ်လို့ လိုအပ်တာလေးတွေရှိကောင်းရှိနိုင်ပါလိမ့်မယ်။
