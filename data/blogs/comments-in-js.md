---
title: "JavaScript သိုင်းကျမ်း အပိုင်း (၁) - Comments"
date: "2021-06-26"
image: "js.png"
description: "JavaScript မှာရှိတဲ့ comment တွေအကြောင်းနဲ့ သူတို့ရဲ့ usecases"
topics: ["javascript"]
readTime: 6
---

JavaScript ရဲ့ comment တွေအကြောင်းမပြောခင် Comment ဆိုတာဘာလဲ၊ ဘာကြောင့်သုံးရတာလဲ ဆိုတာ အရင်ပြောရအောင်။

Comment ဆိုတာက program ရဲ့ source code မှာ programmer ကနေ ရေးထားတဲ့ စာတွေကိုဆိုလိုတာ။ ဘယ်လိုစာမျိုးလည်းဆိုရင် code ရဲ့အလုပ်လုပ်ပုံကို ရှင်းပြထားတဲ့ short description ပုံစံမျိုး။ Comment တွေ ရေးထားတဲ့အတွက် program ရဲ့ code ကို ဖတ်တဲ့အခါ ဒီcode ကဘာအတွက်ရေးထားတယ်၊ ဘာလိုအလုပ်လုပ်တယ်ဆိုတာကို comment အကူအညီနဲ့ အလွယ်တကူသိစေတယ်။
နောက်တစ်ခုက program run တဲ့အခါ comment တွေကို compiler or interpreter က ထည့်မစဉ်းစားဘူး။

JavaScript မှာ comment ရေးတဲ့အခါ **single-line comment** နဲ့ **multi-line comment** ဆိုပြီး ပုံစံနှစ်မျိုးသုံးလို့ရတယ်။

single-line comment ကိုရေးချင်ရင် delimeter အနေနဲ့ **//** ကိုသုံးရတယ်။

```js
// printing hello word on console
console.log("Hello, world!");
```

multi-line comment ဆိုရင် **/\* \*/** ကြားမှာ ရေးရတယ်။

```js
/*
    Given an array of integers nums and an integer target.
    Return indices of the two numbers such that they add up to target.
*/
```

multi-line comment ကိုမှ style တစ်မျိုးထုတ်ပြီး docs comment ဆိုပြီး သတ်မှတ်ထားတာရှိတယ်။ သူ့ရဲ့ပုံစံက ဒီလို

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};
```

သူ့ကို documentation comment လို့ခေါ်တယ်။ library တွေ framework တွေ ရဲ့ source code တွေမှာ အများဆုံးတွေ့ရတယ်။ သူက အပေါ်က နှစ်ခုလို ရေးချင်တာရေးတာမျိုးမဟုတ်တော့ပဲ code ရဲ့ အလုပ်လုပ်ပုံကို inline documentation အနေနဲ့ရေးရတာဖြစ်တဲ့အတွက် သက်ဆိုင်ရာ language ပေါ်မူတည်ပြီး standard တွေသတ်မှတ်ထားတယ်။ ဥပမာ ဘယ် code တွေကိုတော့ docs comment ရေးခွင့်ပြုမယ်၊ ရေးတဲ့အခါ သက်ဆိုင်ရာ grammar တွေ၊ formatting guidelines တွေ အပြင် ဘယ်codeဆိုရင် ဘယ် tags တွေသုံးရမယ် စတာတွေပါတယ်။

အပေါ်က example ဆိုရင် function တစ်ခုအတွက် အရိုးရှင်းဆုံး docs comment ရေးရမယ့်ပုံစံကိုပြထားတာ။ အဲ့မှာဆို tags တွေသုံးထားတယ်။ @param ဆိုတာက function ကလက်ခံတဲ့ parameter ကိုပြောတာ။ {number[]} nums ဆိုတာက number array တစ်ခု function ကိုပေးရမယ် အဲ့ value အတွက် function မှာပေးထားတဲ့ နာမည်က nums လို့ဆိုလိုတာ။ @return ဆိုတာက function ကနေ value တစ်ခု return ပြန်ပေးရမယ်ကိုဆိုလိုတာ။ နောက်ကဟာက return ပြန်ရမယ့် value ပုံစံကိုသတ်မှတ်ထားတာ။ ဒီမှာဆို number array တစ်ခု return ပြန်ရမယ်ပေါ့။

အသေးစိတ်သိချင်ရင် [https://jsdoc.app/](https://jsdoc.app/) ဆိုပြီး documentation ထုတ်ထားတာရှိတယ်။ ပြီးတော့ standard အတွက် [inline-documentation-standards](https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/javascript/) ဒီမှာဝင်ကြည့်လို့ရတယ်။


