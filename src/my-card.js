import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {


  openChanged(e){
    console.log(e.newState);
    if (e.newState === "open"){
      this.fancy = true;
    }
    else{
      this.fancy = false;
    }
  }

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        
      }

      :host([fancy]) 
      {
          display: block;
      }

      .card {
  width: 400px;
  padding: 16px;
  text-align: center;
  margin: 8px;
  margin-left: auto;
  margin-right: auto;
  background-color: green;
  border: solid black 12px;
  border-radius: 8px;
}

:host([fancy]) .card {
  background-color: #add8e6; 
  border: red 8px solid;
  margin: 8px auto;
}

  

.card img{
  width: 100%;
  max-width: 400px;
  display: block;
  margin: auto;
  border: 2px solid;
  border-radius: 8px;
}

.details-btn{
  background-color: orange;
  color: black;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
}
.details-btn:hover{
  background-color: red;
  color: white;
}

    `;

  }

  render() {
    return html`
      <div class="card">
        <img src="${this.ImageSrc}" alt="${this.title}">
        <h2>${this.title}</h2>
        <p>${this.p}</p>
        <a href="https://hax.psu.edu" class="details">
          <button class="details-btn">Details</button>
  
          <details ?open="${this.fancy}"
            @toggle="${this.openChanged}">
            <summary>Description</summary>
            <p><slot name="details"></slot></p>     
          </details>
        </a>
      </div>
    `;
  }
  
  
  static get properties() {
    return {
      title: { type: String },
      p : { type: String},
      ImageSrc : { type: String},
      fancy: {type: Boolean, reflect:true } 

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

