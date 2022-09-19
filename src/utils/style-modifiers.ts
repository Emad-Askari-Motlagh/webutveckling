let isClicked = false;
export function change_style_function(ref: HTMLElement) {
  // console.log("here");
  ref.style.transition = "all 0.2s ease-in";
  if (isClicked) {
    isClicked = !isClicked;
    changeSizeStyle(ref, "1.1");
  } else {
    changeSizeStyle(ref, "1");
    isClicked = !isClicked;
  }
}

//make the size smaller and none to text
export function changeFontStyle(ref: HTMLElement, fontSize: string) {
  ref.style.transform = fontSize;
}
//make the size smaller and none to text
export function changeSizeStyle(ref: HTMLElement, scale: string) {
  ref.style.transform = `scale(${scale})`;
}
