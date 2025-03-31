const images = ["images/images1.png", "images/images2.png", "images/images3.png", "images/images4.png", "images/images5.png", "images/images6.png", "images/images7.png", "images/images8.png", "images/images9.png", "images/images10.png", "images/images11.png", "images/images12.png", "images/images13.png", "images/images14.png", "images/images15.png", ];
let currentIndex = 0;

const displayedImage = document.getElementById("displayedImage");
const nextButton = document.getElementById("nextButton");

// عند الضغط على الزر، تتغير الصورة
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // الانتقال للصورة التالية
    displayedImage.style.opacity = "0"; // تأثير إخفاء الصورة قبل التبديل
    setTimeout(() => {
        displayedImage.src = images[currentIndex];
        displayedImage.style.opacity = "1"; // إعادة إظهار الصورة الجديدة
    }, 300);
});
