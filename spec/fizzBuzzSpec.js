describe('fizzBuzz', function() {
	it('should return fizzbuzz if devisable 15', function() {
		expect(fizzBuzz(15)).toEqual('fizzbuzz');
	});
	it('should return fizz if devisable by 3', function() {
		expect(fizzBuzz(3)).toEqual('fizz');
	});
	it('should return buzz if devisable by 5', function() {
		expect(fizzBuzz(5)).toEqual('buzz');
	});
	it('return number if not devisable by 15,3,5', function() {
		expect(fizzBuzz(2)).toEqual(2);
	});
});
