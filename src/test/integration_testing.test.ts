import { getData } from '../my-components/integration_testing';

describe('getData', () => {
  it('should retrieve data from an external API', async () => {
    const data = await getData();
    expect(data.userId).toBe(1);
  });
});