import { EmailValidatorAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import { EmailValidatorProtocol, FnEmailValidatorProtocol } from './validation/email-validator-protocol';

function validaEmail(emailValitador: EmailValidatorProtocol, email: string): void {
  if (emailValitador.isEmail(email) === false) {
    console.log('Email is invalid');
  }
  console.log('Email is valid');
}

function validaEmailFn(emailValitador: FnEmailValidatorProtocol, email: string): void {
  if (emailValitador(email)) {
    console.log('Email is invalid');
  }
  console.log('Email is valid');
}

validaEmail(new EmailValidatorAdapter(), 'email@gmail.com');
validaEmailFn(emailValidatorFnAdapter, 'email@gmail.com');
