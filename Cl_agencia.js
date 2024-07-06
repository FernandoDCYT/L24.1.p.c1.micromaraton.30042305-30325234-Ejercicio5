export default class Cl_agencia{
    constructor(){
        this.contSus=0;
        this.contA=0;
        this.contB=0;
        this.contC=0;
    }
    procesarSuscriptor(s){
        this.contSus++
        if(s.plan=="A"){
            this.contA++;
        }
        else if(s.plan=="B"){
            this.contB++;
        }
        else if (s.plan=="C"){
            this.contC++
        }
    }
    calcPorcC(){
        return this.contC/this.contSus*100
    }
    calcPlanFav(){
        if(this.contA>this.contB && this.contA>this.contC){
            return "Plan A"
        }
        else if(this.contB>this.contA && this.contB>this.contC){
            return "Plan B"
        }
        else if(this.contC>this.contA && this.contC>this.contB){
            return "Plan C"
        }
        else if(this.contB>this.contC && this.contA>this.contC){
            return "Plan A y B"
        }
        else if(this.contA>this.contB && this.contC>this.contB){
            return "Plan A y C"
        }
        else if(this.contB>this.contA && this.contB>this.contA){
            return "Plan B y C"
        }
        else if(this.contA == this.contB == this.contC ){
            return "Plan A, B y C"
        }
    }
}