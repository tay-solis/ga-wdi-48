class DOMObj {
  constructor(selector) {
    this.elm = selector.nodeName ? [selector] : document.querySelectorAll(selector);
  }
  on(eventName, callback) {
    for (let i = 0; i < this.elm.length; i++) {
      this.elm[i].addEventListener(eventName, callback);
    }
  }
  css(prop, value) {
    for (let i = 0; i < this.elm.length; i++) {
      this.elm[i].setAttribute('style', `${prop}:${value}`);
    }
  }
  html(value) {
    for (let i = 0; i < this.elm.length; i++) {
      let h = this.elm[i].innerHTML;
      if (h != undefined) {
        this.elm[i].innerHTML = value
      } else {
        return h;
      }
    }
  }
  val(value){
    for (let i = 0; i < this.elm.length; i++) {
      let v = this.elm[i].value;
      if (v != undefined) {
        this.elm[i].value = value
      } else {
        return v;
      }
    }
  }
  find(child){
    return this.elm.querySelectorAll(child);
  }
  children(){
    let children = [];
    for(let i = 0; i < this.elm.length; i++){
      children.push(this.elm[i].childNodes);
    }
    return children;
  }
  parent(){
    return this.elm[0].parentNode;
  }
  siblings(){
    let parent = this.elm[0].parentNode;
    let siblings = [];
    for(let i = 0; i < parent.children.length; i++){
      let sibling = parent.children[i];
      for(let j = 0; j < this.elm.length; j++){
        if(this.elm[j] !== sibling) {
          siblings.push(sibling);
        }
      }
    }
    return siblings;
  }
}

const $ = (selector) => {
  let elm = new DOMObj(selector);
  return elm;
}
