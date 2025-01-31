export class State<T> {
  private value: T;
  private onChange: () => void;

  constructor(initialValue: T, onChange: () => void) {
    this.value = initialValue;
    this.onChange = onChange;
  }

  get(): T {
    return this.value;
  }

  set(newValue: T) {
    if (newValue !== this.value) {
      this.value = newValue;
      this.onChange();
    }
  }
}
