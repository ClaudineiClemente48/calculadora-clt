const horas_extras = require('./horas_extras');

test('retornar o salario por 10, Horas trabalhada50, carga horaria 40,e o resultado é 100', () =>{
    expect(horas_extras(10, 50, 40)).toBe(100)
})

test('retornar o salario 10, horas trabalhada 30,carga horaria 36, resultado experado 0', () =>{
    expect(horas_extras(10, 30, 36)).toBe(0)
})

test('retornar o salario por hora -10, Horas trabalhada 50, carga horaria 40, resultado "Todos os valores deverão ser positivos" ', () =>{
    expect(horas_extras(-10, 50, 40)).toBe('Todos os valores deverão ser positivos')
})

test('retornar o salario por hora 10, Horas trabalhada -50, carga horaria 40, resultado "Todos os valores deverão ser positivo"',
    () => {
        expect(horas_extras(10, -50, 40)).toBe('Todos os valores deverão ser positivos')
    }
)

test('retornar o salario por hora 10, Horas trabalhada 50, carga horaria -40, resultado "Todos os valores deverão ser positivo"',
    () => {
        expect(horas_extras(10, 50, -40)).toBe('Todos os valores deverão ser positivos')
    })

    test('retornar o salario por hora "A", Horas trabalhada 50, carga horaria -40, resultado não é um numero', () => {
        expect(horas_extras('A', 50, -40)).toBe('Todos os valores deverão ser numeros')
    })

    test('retornar o salario por hora 10, Horas trabalhada A, carga horaria -40, resultado não é um numero', () => {
        expect(horas_extras(10, "A", -40)).toBe('Todos os valores deverão ser numeros')
    })
    
    test('retornar o salario por hora 10, Horas trabalhada 50, carga horaria "A", resultado não é um numero', () => {
        expect(horas_extras(10, 50, "A")).toBe('Todos os valores deverão ser numeros')
    })

