export interface EmailValidatorProtocol {
  isEmail: FnEmailValidatorProtocol;
}

export interface FnEmailValidatorProtocol {
  (email: string): boolean;
}
