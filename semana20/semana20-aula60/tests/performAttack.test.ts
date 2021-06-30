import { Character } from "../src/model/character";
import { performAttack } from "../src/performAttack";
import { validatorMock, validatorMock2 } from "./mocks/performAttackMock";

describe('validate perform attack tests', () => {

    test("Should perform attack", () => {
        // const validatorMock = jest.fn(() => {
        //   return true;
        // });
    
        const attacker: Character = {
          name: "Scorpion",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
      });

      test("Should return invalid character error", () => {
        expect.assertions(4);
        // const validatorMock = jest.fn(() => {
        //   return false;
        // });
    
        const attacker: Character = {
          name: "",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
          performAttack(attacker, defender, validatorMock2 as any);
        } catch (err) {
          expect(err.message).toBe("Invalid character");
          expect(validatorMock2).toHaveBeenCalled();
          expect(validatorMock2).toHaveBeenCalledTimes(1);
          expect(validatorMock2).toHaveReturnedTimes(1);
        }
      });
})