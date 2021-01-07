const timelineCss = `
.timeline{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  cursor: default;
}
.timeline::before{
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  box-shadow: 0px 0px 1px 1px var(--color-green-light);
  border: 3px solid white;
  background-color: var(--color-primary);
}
.timeline-left, .timeline-right{
  width: 45%;

}
.timeline-left{
  font-size: 16px;
  font-family: 'JetBrains Mono', monospace;
}
.timeline-right{
  font-size: 16px;
  font-family: 'JetBrains Mono', monospace;
}
.timeline a {
  cursor: pointer;
  color: var(--color-orange);
  text-decoration: none;
  font-family: 'JetBrains Mono', monospace;
}
`



customElements.define('time-lines', class extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    const link = this.getAttribute('link')
    const linkName = this.getAttribute('link-name')
    const linkInRight = this.getAttribute('right')
    const linkInLeft = this.getAttribute('left')
    const infoRight = this.getAttribute('info-right')
    const infoLeft = this.getAttribute('info-left')
    shadow.innerHTML = `
    <style>
      ${timelineCss}
    </style>
    <div class="timeline">
    <div class="timeline-left">${infoLeft ? infoLeft : ''}
      ${linkInLeft ? `<a href="${link}">${linkName}</a>` : ''}
    </div>
    <div class="timeline-right">${infoRight ? infoRight: ''}
      ${linkInRight ? `<a href="${link}">${linkName}</a>` : ''}
    </div>
  </div>`
  }
});