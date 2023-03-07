class TuttiShape {
  canvas: HTMLDivElement;
  base: number;
  side: number;
  id: number;

  constructor(selector: string = "#canvas") {
    this.canvas = document.querySelector<HTMLDivElement>(selector)!
    this.canvas.classList.add("tutti-image-container")
    this.side = this.canvas.offsetHeight
    this.base = this.canvas.offsetWidth
    this.id = Math.floor(Math.random() * 100000)
  }

  private generatePoint(side: number): number {
    let quater = side / 4
    let half = side / 2
    return quater + half * Math.random()
  }

  render() {
    let initialPoint = this.generatePoint(this.base)
    let d = `M${initialPoint},0
             Q0,0 0,${this.generatePoint(this.side)}
             Q0,${this.side} ${this.generatePoint(this.base)},${this.side - 10}
             Q${this.base},${this.side} ${this.base},${this.generatePoint(this.side)}
             Q${this.base},0 ${initialPoint},0`
    
    let mask = document.createElement('div')
    this.canvas.parentNode?.insertBefore(mask, this.canvas)
    mask.innerHTML = `<svg style="position: absolute; pointer-events: none" width="${this.base}" height="${this.side}" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                              <mask id="mask-${this.id}">
                                  <path fill="#ffffff" d="${d}"></path>
                              </mask>
                          </defs>
                      </svg>`
    this.canvas.children[0].setAttribute('style', `mask: url(#mask-${this.id})`)
  }
}

let myMask = new TuttiShape('#tutti')
myMask.render()

let Ryan = new TuttiShape('#ryan')
Ryan.render()

export {}