import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Marcus', 'Vinicius');
  console.log('Loading...');
  console.log(await user.getAddresses());

  console.log('cached...');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
