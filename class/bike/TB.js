import { BIKE_TB, TB_INITIAL_STATE } from "../constant/BikeConstants.js";
import { TBRenderer } from "./renderer/TBRenderer.js";
import { PlayerBike } from "./PlayerBike.js";
export class TB extends TBRenderer(PlayerBike) {
    constructor(parent, last) {
        super(parent);
        last = last || TB_INITIAL_STATE[0];
        this.$consts = TB_INITIAL_STATE;

        this.restore(last);
        this.head.size = 12;
        this.backWheel.size = 11.7*1.1;
        this.frontWheel.size = 11.7*1.1;
        this.headToBack.lengthTowards = 44.5;
        this.headToBack.springConstant = 0.35;
        this.headToBack.dampConstant = 0.3;
        this.frontToBack.lengthTowards = 43.5;
        this.frontToBack.springConstant = 0.85;
        this.frontToBack.dampConstant = 0.3;
        this.headToFront.lengthTowards = 44.5;
        this.headToFront.springConstant = 0.35;
        this.headToFront.dampConstant = 0.3;
        this.rotationFactor = 2.75;
/* original, DO NOT EDIT
        this.restore(last);
        this.head.size = 14;
        this.backWheel.size = 11.7;
        this.frontWheel.size = 11.7;
        this.headToBack.lengthTowards = 45;
        this.headToBack.springConstant = 0.35;
        this.headToBack.dampConstant = 0.3;
        this.frontToBack.lengthTowards = 42;
        this.frontToBack.springConstant = 0.35;
        this.frontToBack.dampConstant = 0.3;
        this.headToFront.lengthTowards = 45;
        this.headToFront.springConstant = 0.35;
        this.headToFront.dampConstant = 0.3;
        this.rotationFactor = 16;
*/
    }

    toString() {
        return BIKE_TB;
    }
}
