class PageHeader{
    private title:string;
    private color:string;
    private font:string;
    private alignment: "center" | "right" | "left" = "center";

    constructor(title: string, color: string, font: string) {
        this.title = title;
        this.color = color;
        this.font = font;
    }

    public getProperties(): string {
        return `Title: ${this.title}, Color: ${this.color}, Font: ${this.font}`;
    }

    public setAlignment(alignment: 'center' | 'right' | 'left'): string {
        const validOptions: Array<'center' | 'right' | 'left'> = ['center', 'right', 'left'];
        if (validOptions.includes(alignment)) {
            this.alignment = alignment;
            return `Alignment set to: ${this.alignment}`;
        } else {
            return `Invalid alignment. Valid options are: center, right, left.`;
        }
    }
    
    public printProperties(): string {
        return `<div>Properties: ${this.getProperties()}</div>
        <div>Alignment: ${this.alignment}</div>`;
    }

    }


const header = new PageHeader('My Web Page', 'blue', 'Montserrat');
header.setAlignment('right');


export const $01exercise = () => {
  const $element = document.getElementById("exercise-1");
  $element!.innerHTML += `
    <h2>EXERCISE 1.</h2>
    <p>Create a class called HeaderPage: </p>
    <div class="container-class">
     <p>${header.printProperties()}</p>
     </div>
    `;
};
