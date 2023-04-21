import { test, expect, beforeEach } from "vitest";
import { LinkedList, NumberList, sumTwoNumbers } from ".";

let linkedList: LinkedList<number>;

beforeEach(() => {
  linkedList = new LinkedList<number>();
});

test("Should be able to add nodes to it", () => {
  linkedList.append(5);
  linkedList.append(99);
});

test("Should be iterable", () => {
  linkedList.append(5);
  linkedList.append(99);
  linkedList.append(3);

  const vector = [];
  for (const number of linkedList) {
    vector.push(number);
  }

  expect(vector).toEqual([5, 99, 3]);
});

test("Should make a reversed list from number", () => {
  const list = NumberList.fromNumber(23409);
  const vector = [];

  for (const number of list) {
    vector.push(number);
  }

  expect(vector).toEqual([9, 0, 4, 3, 2]);
});

// test("Should dismiss prepending zeroes", () => {
//   const numberList = new NumberList();

//   numberList.append(2);
//   numberList.append(3);
//   numberList.append(4);
//   numberList.append(0);

//   expect(numberList.toString()).toBe("432");
// });

test("Should be convertable to string", () => {
  expect(NumberList.fromNumber(342).toString()).toBe("342");
  expect(NumberList.fromNumber(807).toString()).toBe("807");
});

test("Should be able to sum two numbers", () => {
  let n1 = NumberList.fromNumber(342);
  let n2 = NumberList.fromNumber(465);

  expect(sumTwoNumbers(n1, n2).toString()).toBe("807");

  n1 = NumberList.fromNumber(23);
  n2 = NumberList.fromNumber(349);

  expect(sumTwoNumbers(n1, n2).toString()).toBe("372");

  n1 = NumberList.fromNumber(1);
  n2 = NumberList.fromNumber(2300);

  expect(sumTwoNumbers(n1, n2).toString()).toBe("2301");

  n1 = NumberList.fromNumber(0);
  n2 = NumberList.fromNumber(0);

  expect(sumTwoNumbers(n1, n2).toString()).toBe("0");

  n1 = NumberList.fromNumber(99);
  n2 = NumberList.fromNumber(999);

  expect(sumTwoNumbers(n1, n2).toString()).toBe("1098");
});
