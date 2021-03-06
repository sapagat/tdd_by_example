describe('Money', () => {
  beforeEach(() => {
    jasmine.addCustomEqualityTester(moneyEquality)
  })

  it('can multiply an amount by a number', () => {
    const five = Money.euro(5)

    let product = five.times(2)

    expect(product).toEqual(Money.euro(10))
  })

  it('knows when two quantities are the same', () => {
    const five = Money.euro(5)
    const otherFive = Money.euro(5)
    const six = Money.euro(6)

    expect(five.isEqual(otherFive)).toBe(true)
    expect(five.isEqual(six)).toBe(false)
  })

  it('can distinguish between euros and dollars', () => {
    const fiveEuros = Money.euro(5)
    const fiveDollars = Money.dollar(5)

    expect(fiveEuros).not.toEqual(fiveDollars)
  })

  it('has a currency identifier', () => {
    const anyAmount = 5

    expect(Money.euro(anyAmount).currency()).toEqual('EUR')
    expect(Money.dollar(anyAmount).currency()).toEqual('USD')
  })

  it('preserves its currency after multiplying by a number', () => {
    expect(Money.euro(5).times(3).currency()).toEqual('EUR')
    expect(Money.dollar(5).times(3).currency()).toEqual('USD')
  })

  function moneyEquality (a, b) {
    if(a instanceof Money && b instanceof Money) {
      return a.isEqual(b)
    }
  }
})
