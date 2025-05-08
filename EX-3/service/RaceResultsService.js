import fs from "fs";
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    if (filePath.includes(".json")) {
      const content = JSON.stringify(this._raceResults);
      fs.writeFileSync(filePath, content, "utf-8");
      return;
    }
    console.log(`Provide a JSON file!`);
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    if (filePath.includes(".json")) {
      try {
        const data = fs.readFileSync(filePath, "utf-8");
        this._raceResults = JSON.parse(data);
        console.log(this._raceResults);
      } catch (err) {
        console.log(err);
      }
      return;
    }
    console.log(`Provide a JSON file!`);
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
    // TODO
    const target = this._raceResults.find(
      (raceResult) => raceResult._id === participantId && raceResult._sportType === sport
    );
    if (target) {
      return target._duration;
    }
    return null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    // TODO
    const participants = this._raceResults.filter(
      (raceResult) => raceResult._id === participantId
    );
    if (participants.length === 0) {
      return null;
    }
    let totalTime = new Duration(0);
    for (let participant of participants) {
      totalTime = totalTime.plus(participant._duration);
    }
    return totalTime.toString();
  }
}
