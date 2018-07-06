import {messageSplitter} from '../../utils/util.js'

describe('GIVEN messageSplitter function', () => {
  describe('WHEN supplied with empty text string', () => {
    const textString = '';
    it('Then it should return an array with an empty string', () => {
      expect(messageSplitter(textString).length).to.equal(1);
      expect(messageSplitter(textString)[0]).to.equal('');
    })
  })
})