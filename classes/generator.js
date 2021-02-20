class Generator {
    constructor(baseCost, scalingFactor) {
        this.currentValue= 0
        this.baseCost=baseCost
        this.scalingFactor = scalingFactor
    }
    cost () {
        return Math.floor(this.baseCost * this.scalingFactor ** this.currentValue);
    }
}
