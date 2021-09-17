export const scrollIntoView = (elementID: string) => {
  const yOffset = -50;
  const element = document.getElementById(elementID);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
