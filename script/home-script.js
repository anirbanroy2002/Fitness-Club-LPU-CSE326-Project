//top content height

document.getElementById("highlight-content").style.height = (window.innerHeight - parseInt(window.getComputedStyle(document.getElementById("header")).height))
    + "px";

//customer reviews slider
let customerReviews = document.querySelectorAll(".customer-review");
let customerReviewsIndex = 0;
let customerReviewsInterval = setInterval(function ()
{
    customerReviews[customerReviewsIndex].classList.remove("active");
    customerReviewsIndex++;
    if (customerReviewsIndex >= customerReviews.length)
    {
        customerReviewsIndex = 0;
    }
    customerReviews[customerReviewsIndex].classList.add("active");
}, 5000);

//revolver carousel
let revolverCarouselMedia = document.querySelector("#rev-inner-media");
let revolverCarouselText = document.querySelector("#rev-inner-textual > p");
let revolverCarouselHeading = document.querySelector("#rev-inner-textual > h3");
let latestEventsCar = document.getElementById("latest-events-carousel");
let revolverCarouselData = [
    {
        media: "./videos/run.mp4",
        type: "video",
        heading: "Cardio Marathon",
        text: "Last month, we conducted a cardio marathon for our members. We had a great turnout and everyone had a blast. We hope to do this again soon!"
    },
    {
        media: "./images/cycling.jpeg",
        type: "image",
        heading: "Periodic Cycling Events",
        text: "We conduct periodic cycling events for our members. It's a great way to stay fit and have fun at the same time."
    },
    {
        media: "./videos/senior.mp4",
        type: "video",
        heading: "Senior Citizen Special Events",
        text: "We conduct special events for our senior citizens. We have a lot of fun and it's a great way of promoting good health among the older generation."
    },
    {
        media: "./images/yoga-event.jpg",
        type: "image",
        heading: "Yoga Awareness Event",
        text: "FitNFine organised an Yoga awareness event on the International Yoga Day, which was attended by 100s of participants."
    }
];

function shiftMedia()
{
    revolverCarouselMedia.classList.add("shift");
    revolverCarouselText.classList.add("shift");
    revolverCarouselHeading.classList.add("shift");
    if (revolverCarouselIndex >= revolverCarouselData.length)
    {
        revolverCarouselIndex = 0;
    }
    i = revolverCarouselData[revolverCarouselIndex];
    revolverCarouselIndex++;
    let mediaContent = "";
    if (i.type == "video")
    {
        mediaContent = `<video src="${i.media}" autoplay loop muted></video>`;
    }
    else
    {
        mediaContent = `<img src="${i.media}">`;
    }

    setTimeout(function ()
    {
        revolverCarouselMedia.innerHTML = mediaContent;
        revolverCarouselHeading.innerHTML = i.heading;
        revolverCarouselText.innerHTML = i.text;
        revolverCarouselMedia.classList.remove("shift");
        revolverCarouselText.classList.remove("shift");
        revolverCarouselHeading.classList.remove("shift");
    }, 1000);
}

let revolverCarouselIndex = 0;
let revolverCarouselInterval = setInterval(shiftMedia, 7000);

//fitnfine map

let mapholder = document.querySelector("#fitnfine-map-location > iframe");
mapholder.setAttribute("src", "https://maps.google.com/maps?q=lovely%20professional%20university&t=&z=13&ie=UTF8&output=embed")
