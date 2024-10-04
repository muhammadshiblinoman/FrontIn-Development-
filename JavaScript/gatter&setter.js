
class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if( newWidth > 0 ) {
            this._width = newWidth;
        } else {
            console.error("Width must be positive Value");
        }
    }
    set height(newHeight) {
        if( newHeight > 0 ) {
            this._height = newHeight;
        } else {
            console.error("Height must be positive Value");
        }
    }

    get width() {
        return (this._width).toFixed(1);
    }
    get height() {
        return this._height.toFixed(1);
    }
    get aria() {
        return (this._height*this._width).toFixed(2);
    }
}

let rectangle = new Rectangle(12,14);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.aria);