import { GhostBike } from "./GhostBike.js";
import { TB_INITIAL_STATE } from "../../constant/BikeConstants.js";
import { TBRenderer } from "../renderer/TBRenderer.js";

export class TBGhost extends TBRenderer(GhostBike) {
    constructor(parent, ghostKeys, last) {
        super(ghostKeys, parent);
        last = last || (console.log('fallback', last), TB_INITIAL_STATE[0]);
        this.restore(last);
        this.head.size = 12;
        this.backWheel.size = 11;
        this.frontWheel.size = 11;
        this.headToBack.lengthTowards = 45;
        this.headToBack.springConstant = 0.55;
        this.headToBack.dampConstant = 0.4;
        this.frontToBack.lengthTowards = 42;
        this.frontToBack.springConstant = 0.2;
        this.frontToBack.dampConstant = 0.4;
        this.headToFront.lengthTowards = 45;
        this.headToFront.springConstant = 0.55;
        this.headToFront.dampConstant = 0.4;
        this.rotationFactor = 3;
    }

    toString() {
        return BIKE_TB;
    }
}
