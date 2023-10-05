import productImg01 from '../images/clothes-1.png'
import productImg02 from '../images/clothes-2.png'
import productImg03 from '../images/clothes-3.png'
import productImg04 from '../images/clothes-4.png'
import productImg05 from '../images/clothes-5.png'

import productImg06 from "../images/electronics-1.png";
import productImg007 from "../images/electronics-2.png";
import productImg008 from "../images/electronics-3.png";
import productImg08 from "../images/electronics-4.png";

import productImg09 from "../images/beauty-1.png";
import productImg10 from "../images/beauty-2.png";
import productImg11 from "../images/beauty-3.png";

import productImg12 from "../images/house-1.png";
import productImg14 from "../images/phone-02.jpg";
import productImg15 from "../images/phone-03.png";
import productImg16 from "../images/phone-04.jpg";
import productImg17 from "../images/phone-05.jpg";
import productImg18 from "../images/phone-06.jpg";

import productImg19 from "../images/watch-01.jpg";
import productImg20 from "../images/watch-02.jpg";
import productImg21 from "../images/watch-03.jpg";
import productImg22 from "../images/watch-04.jpg";

import productImg23 from "../images/wireless-01.png";

import productImg25 from "../images/wireless-03.png";

const products = [
  {
    id: "01",
    productName: " كارديجان بيزك طويل ",
    imgUrl: productImg01,
    category: "clothes",
    price: 130,
    shortDesc:
      " جبنالك قطعة ماتستغنيش عنه في الصيف بألوان مختلفة تغيري فيها براحتك، مع كارديجان بيزك طويل، هتعملي بيه أكتر من ستايل بخامة مريحة و خفيفة بسعر مغري😉 ",
    description:
      " جبنالك قطعة ماتستغنيش عنه في الصيف بألوان مختلفة تغيري فيها براحتك، مع كارديجان بيزك طويل، هتعملي بيه أكتر من ستايل بخامة مريحة و خفيفة بسعر مغري😉 ",
    reviews: [
      {
        rating: 4.7,
        text: ".",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: " كارديجان مشجر كاشمير+ كارديجان خامة فوم اسود ",
    imgUrl: productImg02,
    category: "clothes",
    price: 160,
    shortDesc:
      " عروض العيد عندنا لسه مكملة 😍، عشان خروجات العيد محتاجة لبس شيك كمان مريح وفرنالك عرض كارديجان مشجر بيج + كارديجان بيزك اصفر، قطعتين مميزين و عاملين بسعر ميتعوضش😉👌 ",
    description:
      " عروض العيد عندنا لسه مكملة 😍، عشان خروجات العيد محتاجة لبس شيك كمان مريح وفرنالك عرض كارديجان مشجر بيج + كارديجان بيزك اصفر، قطعتين مميزين و عاملين بسعر ميتعوضش😉👌 ",
    reviews: [
      {
        rating: 4.8,
        text: "Lore.",
      },
      {
        rating: 4.8,
        text: "Lorem.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: " شيميز حريمي اوفر سايز ",
    imgUrl: productImg03,
    category: "clothes",
    price: 173,
    shortDesc:
      " دايما بنحب نخليكي مع الترند😍، و عشان الشميز الأوفر سايز ترندي جدا الصيف دا بالوانة المترقعة، وفرناه عشانك بخامة طرية و مريحة للصيف، قطعة مميزة و عملية هتقدري تلبسي باكتر من طريقة ",
    description:
      " دايما بنحب نخليكي مع الترند😍، و عشان الشميز الأوفر سايز ترندي جدا الصيف دا بالوانة المترقعة، وفرناه عشانك بخامة طرية و مريحة للصيف، قطعة مميزة و عملية هتقدري تلبسي باكتر من طريقة ",
    reviews: [
      {
        rating: 4.6,
        text: "خامة ممتازه ",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: " ترينينج NY صيفى نبيتى*أسود + ترينينج NY صيفى رمادى*أبيض",
    imgUrl: productImg04,
    category: "clothes",
    price: 253,
    shortDesc:
      "الصيف والحر بيفرهدوك؟ حلينا المشكلة دي ووفرنالك عرض 4 قطع من الترنجات الصيفي الخفيفة، عشان تقعد في البيت وانت مرتاح. ",
    description:
      "الصيف والحر بيفرهدوك؟ حلينا المشكلة دي ووفرنالك عرض 4 قطع من الترنجات الصيفي الخفيفة، عشان تقعد في البيت وانت مرتاح.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "عرض 3 تيشيرت صيفى ترندي + عرض اشيك ٣ تيشيرت صيفي",
    imgUrl: productImg05,
    category: "clothes",
    price: 163,
    shortDesc:
      "عشان الصيف بيحب يجمع بين اللبس المريح والالوان الشيك، وفرنالك عرض هيريحك، 6 تيشيرت صيفي بألوان بيسك مميزة ورسومات بسيطة تظهر شياكتك😎👌",
    description:
      "عشان الصيف بيحب يجمع بين اللبس المريح والالوان الشيك، وفرنالك عرض هيريحك، 6 تيشيرت صيفي بألوان بيسك مميزة ورسومات بسيطة تظهر شياكتك😎👌",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "سماعة Redmi Air Dots + Smart Watch M4 band",
    imgUrl: productImg06,
    category: "electronics",
    price: 330,
    shortDesc:
      "عرض لفترة محدودة، الساعة الترندي m4 band والاير بودز Redmi بسعر مش هيتكرر تاني 😉",
    description:
      "عرض لفترة محدودة، الساعة الترندي m4 band والاير بودز Redmi بسعر مش هيتكرر تاني 😉",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg007,
    category: "electronics",
    price: 210,
    shortDesc:
      "اشتري سماعة الجيمنج joyroom ومتوقفش الجيم أبدا عايز سماعة قوية وصوتها يعزلك عن كل حاجة حواليك عشان تركز في الgame؟! ",
    description:
      "اشتري سماعة الجيمنج joyroom ومتوقفش الجيم أبدا عايز سماعة قوية وصوتها يعزلك عن كل حاجة حواليك عشان تركز في الgame؟! ",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "EARBUDS M19",
    imgUrl: productImg008,
    category: "electronics",
    price: 310,
    shortDesc:
      "بتحب تسمع أغاني وانت بتذاكر علشان تركز، EARBUDS M19 تسمع و تشحن الموبايل وتنور الكشاف بسهولة.",
    description:
      "بتحب تسمع أغاني وانت بتذاكر علشان تركز، EARBUDS M19 تسمع و تشحن الموبايل وتنور الكشاف بسهولة.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "EARBUDS M10",
    imgUrl: productImg08,
    category: "electronics",
    price: 305,
    shortDesc:
      "هتسمع أغاني و تشحن موبايلك وترد على مكالماتك مع EARBUDS M10 اتحكم في موبايلك عن بُعد.",
    description:
      "هتسمع أغاني و تشحن موبايلك وترد على مكالماتك مع EARBUDS M10 اتحكم في موبايلك عن بُعد.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "ارماني سي باشون",
    imgUrl: productImg09,
    category: "beauty",
    price: 250,
    shortDesc:
      "تمتعي بعطر مناسب للمرأة الجريئة الواثقة من ذاتها مع عطرارماني سي باشون.",
    description:
      "قوة ثبات عالية و يدوم طول اليوم.  إفتتاحية العطر الكمثري, المشمش الأسود, الفلفل الوردي و الجريب فروت.  قلب العطر الأناناس, الورد, الهيلوتروب و الياسمين.  قاعدة العطر تتكون من الفانيليا, خشب الأرز, خشب العنبر و الباتشولي.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "سيرم مزيل حبوب الشباب و الظهر و ترطيب الجسم",
    imgUrl: productImg10,
    category: "beauty",
    price: 145,
    shortDesc:
      "ودعي حبوب الشباب للأبد مع سيرم حبوب الشباب، اشتريه بسرعة قبل الكمية ما تخلص.",
    description:
      "يستهدف هذا البخاخ شوائب الجلد والزيوت الزائدة.  يساعد في تقليل المسام ومنع تشققات الجلد.  يحافظ على بشرتك صافية و مشرقة وصحية.  تساعد في تعزيز صحة الجلد في جميع أنحاء الجسم!  يمكن استخدامه في حالات حبوب الوجه والظهر والصدر والذراعين  يتكون من مواد طبيعية غير ضارة للبشرة  مناسب لجميع انواع البشرة  الحجم 30 مل",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "سيرم مزيل الندبات و اثار العمليات",
    imgUrl: productImg11,
    category: "beauty",
    price: 175,
    shortDesc:
      "هتقدري تخفي أثار العمليات و الجروح مع سيرم مزيل الندبات وآثار العمليات",
    description:
      "هتقدري تخفي أثار العمليات و الجروح مع سيرم مزيل الندبات وآثار العمليات",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg12,
    category: "house",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  // {
  //   id: "11",
  //   productName: "Apple iPhone 12 Max",
  //   imgUrl: productImg14,
  //   category: "mobile",
  //   price: 799,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "12",
  //   productName: "Realme 8",
  //   imgUrl: productImg15,
  //   category: "mobile",
  //   price: 599,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "13",
  //   productName: "One Plus Nord",
  //   imgUrl: productImg16,
  //   category: "mobile",
  //   price: 799,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "14",
  //   productName: "Apple iPhone 13 Pro",
  //   imgUrl: productImg17,
  //   category: "mobile",
  //   price: 899,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "15",
  //   productName: "Samsung Galaxy S22",
  //   imgUrl: productImg18,
  //   category: "mobile",
  //   price: 699,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "16",
  //   productName: "Rolex Watch",
  //   imgUrl: productImg19,
  //   category: "watch",
  //   price: 299,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "17",
  //   productName: "Timex Easy Reader Watch",
  //   imgUrl: productImg20,
  //   category: "watch",
  //   price: 299,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "18",
  //   productName: "Rolex Watch",
  //   imgUrl: productImg21,
  //   category: "watch",
  //   price: 299,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "19",
  //   productName: "Apple Watch",
  //   imgUrl: productImg22,
  //   category: "watch",
  //   price: 399,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "20",
  //   productName: "Beat Studio Wireless",
  //   imgUrl: productImg23,
  //   category: "wireless",
  //   price: 199,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },

  // {
  //   id: "22",
  //   productName: "Beat EP Headphones",
  //   imgUrl: productImg25,
  //   category: "wireless",
  //   price: 199,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.8,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.8,
  // },
];

export default products;
