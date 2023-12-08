// Get the input element

// Display the value (you can do something else with it)

const dedicatedTips = document.getElementById("price");
const customTip = document.getElementById("customtip");
// const customTipValue = parseFloat(customTip.value);

const mapping = Array.from(dedicatedTips.children).map((value) => {
  value.addEventListener("click", function (element) {
    let tips = parseInt(value.innerHTML || 0);
    calculation(tips);
  });
});

function calculation(dedicatedTipValue) {
  const priceInput = document.getElementById("pricevalue");
  //number of people
  const numberOfPeopleInput = document.getElementById("numberpeople");
  numberOfPeopleInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  });
  const numberOfPeople = numberOfPeopleInput.value;

  // Get the value of the input field
  if (numberOfPeople != "") {
    let inputPrice = parseFloat(priceInput.value);

    //    console.log(inputValue);
    // const dedicatedTipValue = parseInt(element.target.innerHTML);
    //console.log(dedicatedTipValue);

    if (
      !isNaN(inputPrice) ||
      !isNaN(customTip) ||
      customTip > 0 ||
      numberOfPeople !== 0
    ) {
      let tip = parseInt(
        (inputPrice * dedicatedTipValue) / 100 / numberOfPeople
      );

      const tipamount = document.getElementById("tip-amount");
      tipamount.innerHTML = tip.toFixed(2);
      const totalPerson = document.getElementById("numberpeople").value;
      //   console.log(totalPerson);

      const singlePersonBill =
        (parseInt(inputPrice) + parseInt(tip)) / parseInt(totalPerson);
      const totalPersonPrice = document.getElementById("total-person-price");
      totalPersonPrice.innerHTML = singlePersonBill.toFixed(2);
      //   console.log(bill / totalPerson);
    }
  } else {
    console.log("Please enter no of people");
    const errorMessageSpan = document.createElement("span");
    errorMessageSpan.innerHTML = "Enter number of people";
    errorMessageSpan.style.color = "red";
    const errorContainer = document.getElementById("noofpeople");
    errorContainer.innerHTML = ""; // Clear previous messages
    errorContainer.appendChild(errorMessageSpan);
    setTimeout(() => {
      errorContainer.removeChild(errorMessageSpan);
    }, 3000);
  }
}

customTip.addEventListener("keyup", () => {
  let inputTip = parseInt(customTip.value) || 0;
  if (inputTip > 0) {
    calculation(inputTip);
  }
});
function reset() {
  document.getElementById("pricevalue").value = "";
  document.getElementById("numberpeople").value = "";
  document.getElementById("customtip").value = "";
  document.getElementById("tip-amount").innerHTML = "$0.00";
  document.getElementById("total-person-price").innerHTML = "$0.00";
}

const resetbtn = document.getElementById("reset-btn");
resetbtn.addEventListener("click", reset);
