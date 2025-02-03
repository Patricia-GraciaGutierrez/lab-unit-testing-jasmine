// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 3 | Calculate Area", () => {
    describe("Function calculateArea", () => {
      it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it("should return a number representing the area of a rectangle", () => {
        expect(calculateArea(1, 2)).toEqual(2);
        expect(calculateArea(3, 4)).toEqual(12);
        expect(calculateArea(2, 2)).toEqual(4);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });
  
      it("should return undefined if any of the argunments is not a number", () => {
        expect(calculateArea(1, "2")).toEqual(undefined);
        expect(calculateArea("1", 2)).toEqual(undefined);
        expect(calculateArea("1", "5")).toEqual(undefined);
      })
    });
  });