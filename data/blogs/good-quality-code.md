---
title: "Good Quality Code"
date: "2023-04-11"
image: "cover.jpeg"
description: "Three basic qualities for good code: Readability, Understandability and Maintainability"
topics: ["code quality", 'clean code']
readTime: 3
---

- လက်ရှိ developer လုပ်နေတဲ့ ၁နှစ်ခွဲအတွင်းမှာ တော်တော်လေးသတိထားမိလာတာကတော့ ကိုယ်ရေးနေတဲ့code ရဲ့ quality ပါပဲ။ အရင်အလုပ်မရခင်က ကိုယ်ပိုင် project တွေဆိုရင် ကိုယ်တစ်ယောက်ထဲပဲရေးတာဆိုတော့ ကိုယ်နားလည်ရင် ပြီးရောလုပ်တာကနေ အလုပ်ထဲရောက်တဲ့အခါ team နဲ့ဖြစ်သွားတဲ့အတွက် ကိုယ်ရေးလိုက်တဲ့ feature က changes တွေရှိလာရင် အခြားသူလာပြင်တာပဲဖြစ်ဖြစ် ကိုယ်တိုင်ပဲဖြစ်ဖြစ် အရင် code တွေကိုလွယ်လွယ်ကူကူပြင်လို့ရရဲ့လားဆိုတာ စဉ်းစားမိလာတယ်။ မဟုတ်ရင် code ကိုအရင်နားလည်အောင်လုပ်နေရတာနဲ့ကို task ကရှေ့ရောက်မှာမဟုတ်တော့ဘူး။ ဒါကြောင့် code ရေးတဲ့အခါ ထည့်စဉ်းစားသင့်တယ့် အခြေခံ quality လေးတွေ သိထားရင် ရေရည်မှာ ပိုအဆင်ပြေလာပါလိမ့်မယ်။​

## Readability

- Code တစ်ခုကိုတွေ့ပြီဆိုရင် အရင်ဆုံးစတာက ဒီcodeဟာ ဖတ်လို့ရသလားဆိုတာပါပဲ။ အလွယ်ပြောရရင် word document တစ်ခုကို ဖတ်သလိုပေါ့။​ font style, size, line spacing စတာတွေက consistent ဖြစ်နေတာ, table of content, title, subtitle, bullet list စသည်ဖြင့် document structure က သပ်သပ်ရပ်ရပ်ဖြစ်နေသလိုမျိုး မျက်လုံးထဲမှာလည်း code လေးတွေက indentation တွေ spacing တွေ block by block ခွဲထားတာတွေ စသည်ဖြင့် format လေးကျနေရင် ဖတ်ရတဲ့သူအတွက် အဆင်ပြေစေပါတယ်။ နောက်တစ်ခုက သက်ဆိုင်ရာ languageရဲ့ naming conventions တွေ style guide တွေ ကိုမလိုက်နာတာမျိုး။ ဥပမာ JS မှာဆို camelCase ကိုသုံးတယ်။ အဲ့ဒါကို တခြားပုံစံတစ်မျိုးနဲ့ရေးလိုက်ရင် ပုံမှန်မြင်နေကြကနေ ဖတ်ဖို့အတွက်အားပိုစိုက်လိုက်ရတာဖြစ်နိုင်ပါတယ်။​

## Understandability

- Code တစ်ခုကို နားလည်နိုင်တယ်ဆိုတာက Code logic ကိုစဉ်းစားတဲ့အခါ brain capacity ဘယ်လောက်သုံးရလဲ cognitive load ဘယ်လောက်ရှိလဲပေါ်မူတည်ပါတယ်။ တစ်ခါတစ်ရံ ဖတ်လို့တော့ရပြီး နားလည်ဖို့ခက်တာမျိုးတွေလည်းရှိပါတယ်။ Readabiility က မျက်လုံးထဲရှင်းနေတာမျိုးဆို Understandability က ခေါင်းထဲရှင်းနေတာမျိုးလို့ပြောလို့ရပါတယ်။​ Understandability ကောင်းဖို့အတွက်ကြ variable တွေ, function တွေက descriptive names တွေပေးထားတာ (single letter variable ဆိုနားလည်ဖို့မလွယ်တော့ဘူး)၊ program flow ကို ရှင်းနိုင်သမျှရှင်းအောင်ရေးတာ၊ complex expression တွေကို smaller functions တွေခွဲထုတ်တာ၊ magic number တွေကို const variable တွေနဲ့အစားထိုးတာစသည်ဖြင့် clean code principle တွေလိုက်နာရင် အဆင်ပြေတယ်လို့ပြောရမှာပါ။ code တစ်ခုက comment တွေရေးနေရပြီဆိုရင် အဲ့code ကနားလည်မလွယ်အောင်ရေးထားလို့ဖြစ်နိုင်ပါတယ်။

## Maintainability

- Code တွေကဖတ်လို့၊ နားလည်လို့လွယ်လာပြီဆိုပေမယ့် code ရဲ့ structure ပေါ်မူတည်ပြီး ရေရှည်မှာ ပြောင်းလို့ ပြင်လို့ အသစ်ထပ်ထည့်လို့ လွယ်မလွယ် သိသာလာပါတယ်။ အစကတည်းက code architecture မကောင်းရင် clean ဖြစ်နေအောင်ရေးဦးတော့ အချိန်ကြာလာတာနဲ့အမျှ maintainable အတွက်ခက်ခဲလာနိုင်ပါတယ်။ code တွေက duplicate တွေရှိပြီး မလိုအပ်ပဲ ဖောင်းပွနေတာ၊ file တစ်ခုတည်းမှာပဲ code တွေအပြုံလိုက်ကြီးရေးထားတာ၊ project အတွက် standard မရှိပဲ team member တွေက တစ်ယောက်တစ်မျိုးဆီရေးထားတာ, complex functionality (form handling, state management) တွေအတွက် library တွေသုံးပြီး abstraction layer မထုတ်ထားတာ, သက်ဆိုင်ရာ technology ရဲ့ design pattern တွေမသုံးတာ စတာတွေကြောင့် Maintainability ဘက်မှာ အားနည်းလာပါတယ်။ ဒါကြောင့် code ရေးတဲ့အခါ clean ဖြစ်ရုံမက DRY, KISS, SOLID စတဲ့ principle တွေကို လိုက်နာပြီးရေးမှသာ code တွေကလည်း extensible နဲ့ testable ဖြစ်လာမှာပါ။

- သို့ပေမယ့် business ဘက်ကိုလည်း ထည့်သွင်းစဉ်းစားဖို့လိုပါလိမ့်ဦးမယ်။​ business ရဲ့လိုအပ်ချက်အရ timeline မပေးခဲ့ရင် ကိုယ့်ဘက်ကနေ code quality ထက် task delivery ကိုအရင် ဦးစားပေးလိုက်ရတာလည်းရှိပါလိမ့်မယ်။ mentor တစ်ခါပြောခဲ့ဖူးတယ် developer တွေပိုက်ဆံရတယ်ဆိုတာက business ရဲ့ problem တွေကို ဖြေရှင်းပေးနေလို့ ကိုယ်က code တွေကိုဘယ်လောက်ပဲ လန်ပြန်နေအောင် ရေးထားပါစေ business ဘက်ကို ဖြေရှင်းမပေးနိုင်ဖူးဆိုရင် ရေးထားသမျှ code တွေက အလကားဖြစ်သွားနိုင်တာပါပဲ။
