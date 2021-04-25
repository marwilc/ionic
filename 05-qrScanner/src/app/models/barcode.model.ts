export class Barcode {
  public format: string;
  public text: string;
  public icon: string;
  public type: string;
  public created: Date;

  constructor(format: string, text: string) {
    this.format = format;
    this.text = text;
    this.created = new Date();
    this.determineType();
  }

  private determineType() {
    const initText = this.text.substr(0, 4);
    console.log('TIPO', initText);

    switch (initText) {
      case 'http':
        this.type = 'http';
        this.icon = 'globe';
        break;

      case 'geo':
        this.type = 'http';
        this.icon = 'globe';
        break;

      default:
        this.type = 'No reconnized';
        this.icon = 'create';
        break;
    }
  }
}
