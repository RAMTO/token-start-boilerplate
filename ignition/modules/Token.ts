import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const TokenModule = buildModule('TokenModule', m => {
  const owner = '0x406fb0f0182bD733735e02E89774C9C7F9650e2B';

  const token = m.contract('Token', [owner]);

  return { token };
});

export default TokenModule;
