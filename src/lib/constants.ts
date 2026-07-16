// Employee numbers double as the credential-login password (see handleCreateCredentialEmployee
// in CompanySettingsView.tsx) - the minimum keeps that password from being trivially guessable.
export const EMPLOYEE_NUMBER_MIN_LENGTH = 6;
export const EMPLOYEE_NUMBER_MAX_LENGTH = 12;

// Fallback label for a product with no category set. Previously five different literals
// ('Generales'/'Varios'/'General'/'Otros'/'Sin Cat') were used interchangeably for this.
export const DEFAULT_PRODUCT_CATEGORY = 'Generales';
