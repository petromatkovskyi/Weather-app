let measurementSystem = null;

export class MeasurementSystem {
  #units = 'metric';
  constructor() {
    if (measurementSystem) return measurementSystem;
    measurementSystem = this;
    return this;
  }

  get units() {
    return this.#units;
  }

  set units(newValue) {
    if ((newValue === 'metric' || newValue === 'imperial') && newValue === this.#units)
      return;
    this.#units = newValue;
  }
}
