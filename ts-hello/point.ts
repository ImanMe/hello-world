export class OtherPoint{
    constructor(private _q?:number, private _w?:number){}

    get q(){
        return this._q;
    }

    set q(value){
        if(value < 0){
            throw new Error("value can not be less than zero");
        }
        this._q=value;
    }
    draw(){
        console.log("q is "+ this._q + " w is " + this._w);
    }

    getDistance(another: OtherPoint){
    }
}