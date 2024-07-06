export default class Cl_suscriptor{
    constructor(ced, plan){
        this.ced=ced;
        this.plan=plan;
    }
    set ced(c){
        this._ced=c;
    }
    set plan(p){
        this._plan=p;
    }
    get ced(){
        return this._ced;
    }
    get plan(){
        return this._plan;
    }
    calcAd(){
        if(this.plan=="A"){
            return 3*0.1
        }
        else if(this.plan=="B"){
            return 5*0.1
        }
        else if(this.plan=="C"){
            return 0
        }
    }
    calcTot(){
        if (this.plan=="A"){
            return this.calcAd()+3;
        }
        else if(this.plan=="B"){
            return this.calcAd()+5
        }
        else if (this.plan=="C"){
            return 10
        }
    }
}