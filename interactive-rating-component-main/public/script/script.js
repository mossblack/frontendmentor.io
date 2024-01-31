const ratingButtons = document.querySelectorAll(".circle-button");
const submit = document.getElementById("submit");
let rating = 0;
let maxRating = 0;

ratingButtons.forEach((value, index) => {
  maxRating = index + 1;
  value.onclick = () => {
    rating = index + 1;
    submiter();
  };
});

const submiter = () => {
  submit.onclick = () => {
    const main = document.querySelector("body");
    const container = document.querySelector(".container");
    const lastPage = `<section class="container py-9 items-center text-center">
        <img src="./images/illustration-thank-you.svg" alt="thank you" width="150">
        <div class="py-1.5 px-2.5 rounded-full bg-[#262e38]">
            <h2>You selected ${rating} out of ${maxRating}</h2>
        </div>
        <div>
            <h1>Thank You!</h1>
            <p>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>
    </section>`;
    container.remove();
    main.insertAdjacentHTML("afterbegin", lastPage);
  };
};
