class Generator {
    constructor(baseCost, scalingFactor) {
        this.currentValue= 0
        this.baseCost=baseCost
        this.scalingFactor = scalingFactor
    }
    cost() {
        return Math.floor(this.baseCost * this.scalingFactor ** this.currentValue);
    }
    buy(brightIdeas) {
        if (brightIdeas >= this.cost()){
            brightIdeas -= this.cost();
            this.currentValue += 1;
        }
        return brightIdeas
    }
}
