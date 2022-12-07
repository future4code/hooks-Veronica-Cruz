describe ("teste mock", ()=>{
    test("Showing jest.fn", () => {
	const mock = jest.fn(() => {
		const user = {
				name: "Astrodev",
				age: 29
		}
		return user
	})
})
test("Creating Mocks, sucesso", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});
test("Creating Mocks, falha", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});
})