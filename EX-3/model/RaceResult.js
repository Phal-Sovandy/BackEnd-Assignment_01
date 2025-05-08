import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given participant and sport type
 */
export class RaceResult {
  // TODO
  _id;
  _sportType;
  _duration;


  constructor(id, sportType, duration) {
    this._id = id;
    this._sportType = sportType;
    this._duration = duration;
  }
}
