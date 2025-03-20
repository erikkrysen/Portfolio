export const scrollToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export const scrollToPosition = () => {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: "start"
  });
}