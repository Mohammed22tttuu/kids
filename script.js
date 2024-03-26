// مصفوفة تمثل عناصر العربة
var cartItems = [
    { name: "منتج 1", price: 20 },
    { name: "منتج 2", price: 25 },
    // يمكنك إضافة المزيد من العناصر هنا
];

// وظيفة لعرض عناصر العربة
function displayCart() {
    var cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = ""; // لتفريغ عربة التسوق قبل إعادة عرض العناصر

    // عرض كل عنصر في عربة التسوق
    cartItems.forEach(function(item) {
        var itemElement = document.createElement("div");
        itemElement.textContent = item.name + " - $" + item.price;
        cartContainer.appendChild(itemElement);
    });
}

// استدعاء وظيفة عرض عناصر العربة عند تحميل الصفحة
window.onload = displayCart;
// إنشاء عنصر div لكل حساب سوشيال ميديا
var socialMediaAccounts = [
    { name: "فيسبوك", url: "https://www.facebook.com/yourpage" },
    { name: "تويتر", url: "https://twitter.com/youraccount" },
    { name: "إنستغرام", url: "https://www.instagram.com/youraccount" }
];

// عرض عناصر السوشيال ميديا على الصفحة
function displaySocialMedia() {
    var socialMediaContainer = document.getElementById("socialMedia");

    // إنشاء عناصر لكل حساب سوشيال ميديا
    socialMediaAccounts.forEach(function(account) {
        var socialMediaLink = document.createElement("a");
        socialMediaLink.textContent = account.name;
        socialMediaLink.href = account.url;
        socialMediaLink.target = "_blank"; // لفتح الرابط في نافذة جديدة

        var lineBreak = document.createElement("br");

        socialMediaContainer.appendChild(socialMediaLink);
        socialMediaContainer.appendChild(lineBreak);
    });
}

// استدعاء وظيفة عرض عناصر السوشيال ميديا عند تحميل الصفحة
window.onload = displaySocialMedia;
