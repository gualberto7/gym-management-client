// Form.ts

import { reactive, ref, watch } from "vue";
import api from "@/core/api";
import { get, set } from "lodash";
import ValidationRules from "@/core/utils/validationRules";
import type { ValidationRuleName } from "@/core/interfaces/ValidationRules";
import type { FormMethods } from "../interfaces/Form";

export default class Form<T extends Record<string, any>> {
  public model: T;
  public rules: { [key: string]: string } = {};
  public processing = ref(false);
  public errors: Record<string, string> = reactive({});
  public labels: Record<string, string> = reactive({});
  public error = ref("");
  public isValid = ref(false);
  private validating = ref(false);

  constructor(model: T) {
    this.model = reactive(model) as T;

    watch(
      this.model,
      () => {
        this.validate();
      },
      { deep: true }
    );
  }

  public clearErrors(): void {
    this.errors = {};
  }

  public clearError(): void {
    this.error.value = "";
  }

  public validate() {
    if (this.validating.value) return;
    this.validating.value = true;
    const keys = Object.keys(this.rules);
    for (const key of keys) {
      const rules = this.rules[key].split("|");
      for (const rule of rules) {
        let [ruleName, ruleValue] = rule.split(":");
        const value = this.model[key];
        const validationRule = ValidationRules[ruleName as ValidationRuleName];
        if (!validationRule) {
          throw new Error(`Validation rule ${ruleName} is not defined`);
        }
        if (ruleValue && ruleValue.startsWith("f-")) {
          ruleValue = this.model[ruleValue.substring(2)];
        }
        const { isValid, errorMessage } = validationRule(value, ruleValue);
        if (!isValid) {
          this.errors[key] = errorMessage ?? "";
          break;
        }
        delete this.errors[key];
      }
    }
    this.validating.value = false;
    if (Object.keys(this.errors).length === 0) this.isValid.value = true;
    else this.isValid.value = false;
  }

  public getValue(key: string): any {
    return get(this.model, key);
  }

  public setValue(key: string, value: any): void {
    set(this.model, key, value);
  }

  public async submitForm(
    url: string,
    method: FormMethods = "post"
  ): Promise<any> {
    this.processing.value = true;
    try {
      const response = await api[method](url, this.model);
      return response;
    } catch (error: any) {
      if (error.response) {
        this.error.value = error.response.data.message;
        console.log(error.response.data.errors);
      }
    } finally {
      this.processing.value = false;
    }
  }
}
