let isClicked = false;
export function change_style_function(ref) {
    // console.log("here");
    ref.style.transition = "all 0.2s ease-in";
    if (isClicked) {
        isClicked = !isClicked;
        changeSizeStyle(ref, "1.1");
    }
    else {
        changeSizeStyle(ref, "1");
        isClicked = !isClicked;
    }
}
//make the size smaller and none to text
export function changeFontStyle(ref, fontSize) {
    ref.style.transform = fontSize;
}
//make the size smaller and none to text
export function changeSizeStyle(ref, scale) {
    ref.style.backgroundColor = `red`;
}
