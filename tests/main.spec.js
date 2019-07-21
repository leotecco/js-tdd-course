import { expect } from 'chai';
import calc from '../src/main';

describe('Calc', () => {
  describe('Smoke test', () => {
    it('should exist the calc test', () => {
      expect(calc).to.exist;
    });

    it("should exist the method 'sum'", () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.instanceOf(Function);
    });

    it("should exist the method 'sub'", () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.instanceOf(Function);
    });

    it("should exist the method 'mult'", () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.instanceOf(Function);
    });

    it("should exist the method 'div'", () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.instanceOf(Function);
    });
  });

  describe('Sum', () => {
    it("should return 10 when 'sum(8, 2)'", () => {
      expect(calc.sum(8, 2)).to.be.equal(10);
    });
  });

  describe('Sub', () => {
    it("should return 6 when 'sub(8, 2)'", () => {
      expect(calc.sub(8, 2)).to.be.equal(6);
    });

    it("should return -4 when 'sub(4, 8)'", () => {
      expect(calc.sub(4, 8)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it("should return 56 when 'sub(7, 8)'", () => {
      expect(calc.mult(7, 8)).to.be.equal(56);
    });
  });

  describe('Div', () => {
    it("should return 2 when 'sub(6, 3)'", () => {
      expect(calc.div(6, 3)).to.be.equal(2);
    });

    it("should return 'nao eh possivel divisao por zero' when divide by zero", () => {
      expect(calc.div(6, 0)).to.be.equal('nao eh possivel divisao por zero');
    });
  });
});
