const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function Slidezy(seletor, options = {}) {
  this.container = $(seletor);
  if (!this.container) {
    console.error(`Slidezy: not found container ${this.container}`);
    return;
  }

  this.opt = Object.assign({}, options);

  this.slides = Array.from(this.container.children);

  this._init();
}

Slidezy.prototype._init = function () {
  this.container.classList.add("slidezy-wrapper");

  this._createSlide();
  this._createNavigation();
};

Slidezy.prototype._createSlide = function () {
  this.track = document.createElement("div");
  this.track.className = "slidezy-track";

  this.slides.forEach((slide) => {
    slide.classList.add("slidezy-slide");
    this.track.appendChild(slide);
  });

  this.container.append(this.track);
};

Slidezy.prototype._createNavigation = function () {
  this.prevBtn = document.createElement("button");
  this.nextBtn = document.createElement("button");

  this.prevBtn.textContent = "<";
  this.nextBtn.textContent = ">";

  this.prevBtn.className = "slidezy-prev";
  this.nextBtn.className = "slidezy-next";

  this.container.append(this.prevBtn, this.nextBtn);

  this.prevBtn.onclick = () => this.moveSlide(-1);
  this.nextBtn.onclick = () => this.moveSlide(1);
};

Slidezy.prototype.moveSlide = function (step) {
  console.log(step);
};
