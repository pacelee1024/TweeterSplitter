import {messageSplitter} from '../../utils/util.js'

describe('GIVEN messageSplitter function', () => {
  describe('WHEN supplied with a text string (non-empty) that is less than 50 characters', () => {
    const textString1 = 'test';
    const textString2 = '12345678901234567890123456789012345678901234567890';
    it('THEN it should return the original string', () => {
      expect(messageSplitter(textString1).length).toBe(1);
      expect(messageSplitter(textString2).length).toBe(1);
      expect(messageSplitter(textString1)[0].length).toBe(4);
      expect(messageSplitter(textString2)[0].length).toBe(50);
    });
  });

  describe('WHEN supplied with a text string that is longer than 50 characters', () => {
    const longTextString1 = "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.";
    const longTextString2 = "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep No more; and by a sleep, to say we end the heart-ache, and the thousand natural shocks that Flesh is heir to?"
    const textArray1 = messageSplitter(longTextString1);
    const textArray2 = messageSplitter(longTextString2);

    it('THEN it should break the string and return the array of splitted text', () => {
      expect(textArray1.length).toBe(2);
      expect(textArray2.length).toBe(8);
    });

    for (let i = 0; i < textArray1.length; i++) {
      it('THEN it should contain the header indicating the parts of the whole string - 2 parts', () => {
        expect(textArray1[i].slice(0, 3)).toEqual(`${i+1}`+'/'+`${textArray1.length}`);
      });
    }

    for (let i = 0; i < textArray2.length; i++) {
      it('THEN it should contain the header indicating the parts of the whole string - 8 parts', () => {
        expect(textArray2[i].slice(0, 3)).toEqual(`${i+1}`+'/'+`${textArray2.length}`);
      });
    }
  });

  describe('WHEN supplied with a text string that has word longer than 50 characters', () => {
    const illegalTextString1 = "123456789012345678901234567890123456789012345678901";
    it('THEN it should return an empty array indicating the word length is illegal', () => {
      expect(messageSplitter(illegalTextString1).length).toBe(0);
    });
  });

  describe('WHEN supplied with a text string that has splitted chunk longer than 50 characters', () => {
    const illegalTextString2 = "123 1234567890123456789012345678901234567890123456789";
    it('THEN it should return an empty array indicating the spliting chunk is illegal', () => {
      expect(messageSplitter(illegalTextString2).length).toBe(0);
    });
  });
})