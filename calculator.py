try:
    a = float(input("Enter the first number: "))
    b = float(input("Enter the second number: "))
except ValueError:
    print("Please enter valid numbers")
else:
    c = input("Enter the operation: + , - , * , / , % : ")

    if c == "+":
        print("The sum is", a + b)

    elif c == "-":
        print("The difference is", a - b)

    elif c == "*":
        print("The product is", a * b)

    elif c == "/":
        if b != 0:
            print("The quotient is", a / b)
        else:
            print("Error: Division by zero is not allowed.")

    elif c == "%":
        if b != 0:
            print("The remainder is", a % b)
        else:
            print("Error: Division by zero is not allowed.")

    else:
        print("Invalid operation. Please enter one of +, -, *, /, or %.")