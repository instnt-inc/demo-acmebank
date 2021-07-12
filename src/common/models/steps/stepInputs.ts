export interface StepInputs {
  id: string;
  type?: string;
  label: string;
  options?: string[];
  autocomplete?: string;
  isSelect?: boolean;
  isPhone?: boolean;
  validator?: RegExp;
  default?: string;
}
