import { UserId } from './user-id';

describe('UserId', () => {
  it('construct()', () => {
    expect(UserId.construct()).toStrictEqual(expect.any(UserId));
  });
    it('reConstruct()', () => {
      const expected = UserId.reConstruct('test-id');
      expect(expected).toStrictEqual(expect.any(UserId));
      expect(expected.toString()).toStrictEqual('test-id');
    });

});
