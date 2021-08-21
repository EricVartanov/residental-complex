$(document).ready(function () {
  let currentFloor = 2;
  let floorPath = $(".home-image path");
  let counterUp = $(".counter-up");
  let counterDown = $(".counter-down");
  let modal = $(".modal");
  let modalCloseButton = $(".modal-close-button");
  let viewFlatsButton = $(".view-flats");
  let flatPath = $(".flats path");
  let flatItem = $('.flat-link')
  let currentFlat = 1 


  flatPath.on('mouseover', function() {
    currentFlat = $(this).attr('data-flat-path')
    flatItem.removeClass('current-flat-item')
    flatPath.removeClass('current-flats-paths')
    $(`[data-flat-number=${currentFlat}]`).toggleClass('current-flat-item')
    $(`[data-flat-path=${currentFlat}]`).toggleClass('current-flats-paths')

  })

  flatItem.on('mouseover', function() {
    currentFlat = $(this).attr('data-flat-number')
    flatItem.removeClass('current-flat-item')
    flatPath.removeClass('current-flats-paths')
    $(`[data-flat-number=${currentFlat}]`).toggleClass('current-flat-item')
    $(`[data-flat-path=${currentFlat}]`).toggleClass('current-flats-paths')
  })

  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(`[data-floor=${currentFloor}]`).toggleClass("current-floor")
    $(".counter").text(currentFloor);
  });

  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  counterDown.on("click", function () {
    if (currentFloor > 02) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
