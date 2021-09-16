export const scrollIntoView = (elementID: string) => {
  var element = document.getElementById(elementID);
  var headerOffset = 50;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
