import {validateCharacter} from '../src/validateCharacter'

describe('validate character tests', () => {

    test("Should return false for empty name", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });

      test("Should return false for strength equal zero", () => {
        const result = validateCharacter({
          name: "Liu Kang",
          life: 1500,
          strength: 0,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });

      test("Should return false for defense equal zero", () => {
        const result = validateCharacter({
          name: "Liu Kang",
          life: 1500,
          strength: 300,
          defense: 0,
        });
    
        expect(result).toBe(false);
      });

      test("Should return false fo negative life value", () => {
        const result = validateCharacter({
          name: "Liu Kang",
          life: -1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });

      test("Should return false for life 0", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 0,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });

      test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(true);
      });

}) 