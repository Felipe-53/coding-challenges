export function sumTwoNumbers(
  numberList1: NumberList,
  numberList2: NumberList
) {
  const digitsGroup = getDigitGroups(numberList1, numberList2);

  let overflowDigit = 0;

  let result = new NumberList();

  for (const digits of digitsGroup) {
    let sum = digits.reduce((prev, current) => {
      return prev + current;
    }, 0);

    sum += overflowDigit;

    overflowDigit = 0;

    if (sum > 9) {
      sum = sum - 10;
      overflowDigit = 1;
    }

    result.append(sum);
  }

  if (overflowDigit) {
    result.append(overflowDigit);
  }

  return result;
}

function* getDigitGroups(...args: NumberList[]) {
  let digits: (ListNode<number> | null)[] = args.map((arg) => arg.head);

  while (true) {
    let result = digits.find((digit) => digit !== null);
    if (!result) {
      break;
    }

    digits = digits.map((digit) => {
      if (!digit) {
        digit = {
          value: 0,
          next: null,
        };
      }

      return digit;
    });

    yield digits.map((digit) => digit!.value);

    digits = digits.map((digit) => digit!.next);
  }
}

class ListNode<T> {
  public next: ListNode<T> | null;

  constructor(public value: T) {
    this.next = null;
  }
}

export class LinkedList<T> {
  public head: ListNode<T> | null;
  private tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(node: T) {
    const newNode = new ListNode(node);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  *[Symbol.iterator]() {
    let currentNode = this.head;
    while (currentNode) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }
}

export class NumberList extends LinkedList<number> {
  constructor() {
    super();
  }

  static fromNumber(number: number) {
    let linkedList = new NumberList();

    let numberArray = number
      .toString()
      .split("")
      .map((n) => Number.parseInt(n));

    while (true) {
      const digit = numberArray.pop();
      if (digit === undefined) {
        break;
      }
      linkedList.append(digit);
    }

    return linkedList;
  }

  toString() {
    let numberArr = [];

    for (const number of this) {
      numberArr.unshift(number);
    }

    return numberArr.join("");
  }
}
