class Navigation extends HTMLElement  {
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.render();
    }      
    render(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container px-5">
            <a class="navbar-brand" href="index.html">STUDENT</a>
            <a href="index.html"><img src="assets/img/logo.svg" alt="Logo" width="18%" height="auto"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Naslovnica</a></li>
                    <li class="nav-item"><a class="nav-link" href="okolina.html">Okolina</a></li>
                    <li class="nav-item"><a class="nav-link" href="cilj.html">Ciljevi</a></li>
                </ul>
            </div>
        </div>
        </nav>
        `;
    }
}

class Footer extends HTMLElement  {
    constructor() {
      super();
    }
        
    connectedCallback() {
      this.render();
    }      
    render(){
        this.innerHTML = `
        <footer class="py-5 bg-black">
            <div class="container px-5">
            <p class="m-0 text-center text-white small">Copyright &copy; Sandra Kuča</p>
            <a class"breadcrumb-item" href="onama.html">O nama</a><br>
            <a class"breadcrumb-item" href="assets/favicon.svg">Logo</a></div>
        </footer>
        `;
    }
}

class FirstContent extends HTMLElement  {
    constructor() {
      super();
    }

    get video(){
        return this.getAttribute("video");
      }
    set video(val){
      this.setAttribute("video", val);
    }
    get alter(){
        return this.getAttribute("alter");
      }
    set alter(val){
      this.setAttribute("alter", val);
    }
    get naslov(){
        return this.getAttribute("naslov");
      }
    set naslov(val){
      this.setAttribute("naslov", val);
    }
    get paragraph(){
        return this.getAttribute("paragraph");
      }
    set paragraph(val){
      this.setAttribute("paragraph", val);
    }
    get link(){
      return this.getAttribute("link");
    }
    set link(val){
      this.setAttribute("link", val);
    }
    get primsec(){
      return this.getAttribute("primsec");
    }
    set primsec(val){
      this.setAttribute("primsec", val);
    }

    connectedCallback() {
      this.render();
    }      
    render(){
        this.innerHTML = `
        <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><video controls><source src=${this.video} type="video/mp4"></video></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">${this.naslov}</h2>
                            <p>${this.paragraph}</p>
                            <a class="btn btn-${this.primsec} btn-m rounded-pill mt-5" href=${this.link}>Saznaj više</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

class SecondContent extends HTMLElement  {
  constructor() {
    super();
  }

  get slika(){
      return this.getAttribute("slika");
    }
  set slika(val){
    this.setAttribute("slika", val);
  }
  get alter(){
      return this.getAttribute("alter");
    }
  set alter(val){
    this.setAttribute("alter", val);
  }
  get naslov(){
      return this.getAttribute("naslov");
    }
  set naslov(val){
    this.setAttribute("naslov", val);
  }
  get paragraph(){
      return this.getAttribute("paragraph");
    }
  set paragraph(val){
    this.setAttribute("paragraph", val);
  }
  get link(){
    return this.getAttribute("link");
  }
  set link(val){
    this.setAttribute("link", val);
  }
  get primsec(){
    return this.getAttribute("primsec");
  }
  set primsec(val){
    this.setAttribute("primsec", val);
  }

  connectedCallback() {
    this.render();
  }      
  render(){
      this.innerHTML = `
      <section>
          <div class="container px-5">
              <div class="row gx-5 align-items-center">
                  <div class="col-lg-6">
                      <div class="p-5"><img class="img-fluid rounded-circle" src=${this.slika} alt=${this.alter} /></div>
                  </div>
                  <div class="col-lg-6">
                      <div class="p-5">
                          <h2 class="display-4">${this.naslov}</h2>
                          <p>${this.paragraph}</p>
                          <a class="btn btn-${this.primsec} btn-m rounded-pill mt-5" href=${this.link}>Saznaj više</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      `;
  }
}

class ThirdContent extends HTMLElement  {
    constructor() {
      super();
    }

    get slika(){
        return this.getAttribute("slika");
      }
    set slika(val){
      this.setAttribute("slika", val);
    }
    get alter(){
        return this.getAttribute("alter");
      }
    set alter(val){
      this.setAttribute("alter", val);
    }
    get naslov(){
        return this.getAttribute("naslov");
      }
    set naslov(val){
      this.setAttribute("naslov", val);
    }
    get paragraph(){
        return this.getAttribute("paragraph");
      }
    set paragraph(val){
      this.setAttribute("paragraph", val);
    }
    get link(){
      return this.getAttribute("link");
    }
    set link(val){
      this.setAttribute("link", val);
    }
    get primsec(){
      return this.getAttribute("primsec");
    }
    set primsec(val){
      this.setAttribute("primsec", val);
    }

    connectedCallback() {
      this.render();
    }      
    render(){
        this.innerHTML = `
        <section>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded-circle" src=${this.slika} alt=${this.alter} /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">${this.naslov}</h2>
                            <p>${this.paragraph}</p>
                            <a class="btn btn-${this.primsec} btn-m rounded-pill mt-5" href=${this.link}>Saznaj više</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

class Traka extends HTMLElement  {
  constructor() {
    super();
  }

  get paragraph(){
    return this.getAttribute("paragraph");
  }
  set paragraph(val){
    this.setAttribute("paragraph", val);
  }

  connectedCallback() {
    this.render();
  }      
  render(){
      this.innerHTML = `
      <section>
            <div class="py-5 bg-black">
                <div class="container px-5"><p class="m-0 text-center text-white">${this.paragraph}</p></div>
            </div>
        </section>
      `;
  }
}

class Breadcrumbs extends HTMLElement  {
  constructor() {
    super();
  }

  get naslov(){
    return this.getAttribute("naslov");
  }
  set naslov(val){
    this.setAttribute("naslov", val);
  }

  connectedCallback() {
    this.render();
  }      
  render(){
      this.innerHTML = `
      <section class="breadcrumb">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>${this.naslov}</h2>
            <li><a class"breadcrumb-item" href="index.html">Naslovnica</a> / ${this.naslov}</li>
        </div>

      </div>
    </section>
      `;
  }
}

class Tile extends HTMLElement  {
  constructor() {
    super();
  }

  get slika(){
      return this.getAttribute("slika");
    }
  set slika(val){
    this.setAttribute("slika", val);
  }
  get alter(){
      return this.getAttribute("alter");
    }
  set alter(val){
    this.setAttribute("alter", val);
  }
  get paragraph(){
      return this.getAttribute("paragraph");
    }
  set paragraph(val){
    this.setAttribute("paragraph", val);
  }
  get bg(){
    return this.getAttribute("bg");
  }
  set bg(val){
    this.setAttribute("bg", val);
  }

  connectedCallback() {
    this.render();
  }      
  render(){
      this.innerHTML = `
      <section>
          <div class="container px-5 bg-${this.bg}">
              <div class="row py-3 align-items-center"
                <div class="p-5"><img class="img-fluid rounded-circle" src=${this.slika} alt=${this.alter}/></div>
                <div class="p-1 text-white">
                  <p>${this.paragraph}</p>
                </div>
              </div>
          </div>
      </section>
      `;
  }
}

class Tile2 extends HTMLElement  {
  constructor() {
    super();
  }

  get paragraph(){
      return this.getAttribute("paragraph");
    }
  set paragraph(val){
    this.setAttribute("paragraph", val);
  }
  get bg(){
    return this.getAttribute("bg");
  }
  set bg(val){
    this.setAttribute("bg", val);
  }

  connectedCallback() {
    this.render();
  }      
  render(){
      this.innerHTML = `
      <section>
          <div class="container px-5 bg-${this.bg}">
              <div class="row py-5 align-items-center">
                <div class="p-4 text-white">
                  <p>${this.paragraph}</p>
                </div>
              </div>
          </div>
      </section>
      `;
  }
}

class FourthContent extends HTMLElement  {
  constructor() {
    super();
  }

  get slika(){
      return this.getAttribute("slika");
    }
  set slika(val){
    this.setAttribute("slika", val);
  }
  get alter(){
      return this.getAttribute("alter");
    }
  set alter(val){
    this.setAttribute("alter", val);
  }
  get paragraph(){
      return this.getAttribute("paragraph");
    }
  set paragraph(val){
    this.setAttribute("paragraph", val);
  }

  connectedCallback() {
    this.render();
  }      
  render(){
      this.innerHTML = `
      <section>
          <div class="container px-5">
              <div class="row gx-5 align-items-center">
                  <div class="col-lg-6">
                      <div class="p-5"><img class="img-fluid rounded-circle" src=${this.slika} alt=${this.alter} /></div>
                  </div>
                  <div class="col-lg-6">
                      <div class="p-5">
                          <p>${this.paragraph}</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      `;
  }
}

customElements.define('navigation-component', Navigation);
customElements.define('footer-component', Footer);
customElements.define('first-content', FirstContent);
customElements.define('second-content', SecondContent);
customElements.define('third-content', ThirdContent);
customElements.define('fourth-content', FourthContent);
customElements.define('traka-content', Traka);
customElements.define('breadcrumb-content', Breadcrumbs);
customElements.define('tile-component', Tile);
customElements.define('tile-content', Tile2);


 /*   get prvi(){
        return this.getAttribute("prvi-txt");
      }
    set prvi(val){
      this.setAttribute("prvi-txt", val);
    }
*/

/*
class Navigation extends HTMLElement  {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
    }      
    render(){
        this.innerHTML = `
        
        `;
    }
}
*/

/*
#C0C815  #7C0BDA
*/