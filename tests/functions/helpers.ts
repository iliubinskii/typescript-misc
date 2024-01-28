/* eslint jest/max-expects: [warn, { max: 2 }] -- Ok */

import * as testUtils from "@/test-utils";
import {
  AssertionError,
  ProxyHandlerAction,
  classToInterface,
  createFacade,
  fn,
  is,
  neverDemand,
  onDemand,
  reflect,
  safeAccess,
  wait,
  wrapProxyHandler
} from "@";
import type { Facade, Writable } from "@";

testUtils.installFakeTimer();

const descriptor = {
  configurable: true,
  enumerable: true,
  value: 1,
  writable: true
} as const;

class TestClass {
  public readonly value = 1;

  public f(): number {
    return this.value;
  }
}

function pow2(x: number): number {
  return x * x;
}

function pow3(x: number): number {
  return x * x * x;
}

function safeObj1(): object {
  return safeAccess({ a: 1, b: 2, c: 3 }, { a: is.number }, ["b"]);
}

function safeObj2(): object {
  return safeAccess({ a: 1, b: 2, c: 3 }, { a: is.number });
}

test.each([
  classToInterface(new TestClass()).f(),
  classToInterface(new TestClass()).value
])("classToInterface", value => {
  expect(value).toBe(1);
});

test("createFacade: Missing facade implementation, no value", () => {
  const facade = createFacade("facade", {});

  expect(() => reflect.isExtensible(facade)).toThrow(
    new AssertionError("Missing facade implementation: facade")
  );
  expect(isLikelyComponentType).not.toThrow();

  function isLikelyComponentType(): void {
    reflect.isExtensible(facade);
  }
});

test("createFacade: Missing facade implementation, value", () => {
  const facade = createFacade("facade", {});

  expect(() => reflect.get(facade, "value")).toThrow(
    new AssertionError("Missing facade implementation: facade (key: value)")
  );
  expect(isLikelyComponentType).not.toThrow();

  function isLikelyComponentType(): void {
    reflect.get(facade, "value");
  }
});

test.each([1, 2, 3])("createFacade: extension", value => {
  const extension: Writable<Extension> = { pow: pow2 };

  const facade = createFacade<object, Writable<Extension>>("facade", extension);

  expect(facade.pow(value)).toBe(pow2(value));
  facade.pow = pow3;
  expect(facade.pow(value)).toBe(pow3(value));

  interface Extension {
    readonly pow: (x: number) => number;
  }
});

test.each([1, 2, 3])("createFacade: function", value => {
  const facade = createFacade<(x: number) => number>("facade", {});

  facade.setImplementation(pow2);
  expect(facade(value)).toBe(pow2(value));
});

test.each([
  {
    expected: 1,
    subtest: (facade: Facade<object>): unknown => reflect.get(facade, "value")
  },
  {
    expected: descriptor,
    subtest: (facade: Facade<object>): unknown =>
      reflect.getOwnPropertyDescriptor(facade, "value")
  },
  {
    expected: true,
    subtest: (facade: Facade<object>): unknown => reflect.has(facade, "value")
  },
  {
    expected: true,
    subtest: (facade: Facade<object>): unknown => reflect.isExtensible(facade)
  },
  {
    expected: ["value"],
    subtest: (facade: Facade<object>): unknown => reflect.ownKeys(facade)
  },
  {
    expected: true,
    subtest: (facade: Facade<object>): unknown =>
      reflect.set(facade, "value", 2)
  }
])("createFacade: object", ({ expected, subtest }) => {
  const facade = createFacade<object>("facade", {});

  class Implementation {
    public readonly value = 1;
  }

  facade.setImplementation(new Implementation());
  expect(subtest(facade)).toStrictEqual(expected);
});

test("neverDemand", () => {
  const obj = neverDemand();

  const error = new Error("This object should never be demanded");

  expect(() => reflect.get(obj, "value")).toThrow(error);
});

test.each([
  { expected: 1, subtest: (obj: object): unknown => reflect.get(obj, "value") },
  {
    expected: descriptor,
    subtest: (obj: object): unknown =>
      reflect.getOwnPropertyDescriptor(obj, "value")
  },
  {
    expected: true,
    subtest: (obj: object): unknown => reflect.has(obj, "value")
  },
  {
    expected: true,
    subtest: (obj: object): unknown => reflect.isExtensible(obj)
  },
  {
    expected: ["value"],
    subtest: (obj: object): unknown => reflect.ownKeys(obj)
  },
  {
    expected: true,
    subtest: (obj: object): unknown => reflect.set(obj, "value", 2)
  }
])("onDemand", ({ expected, subtest }) => {
  const obj = onDemand(() => new TestClass());

  expect(subtest(obj)).toStrictEqual(expected);
});

test.each([
  { expected: 1, key: "a" },
  { expected: 2, key: "b" },
  {
    expected: new Error("Read access denied: c"),
    expectedToThrow: true,
    key: "c"
  }
])("safeAccess: get", ({ expected, expectedToThrow, key }) => {
  expect(() => reflect.get(safeObj1(), key)).executionResultToBe(
    expected,
    expectedToThrow
  );
});

test.each([
  {
    expected: {
      configurable: true,
      enumerable: true,
      value: 1,
      writable: true
    },
    propertyKey: "a"
  },
  {
    expected: {
      configurable: true,
      enumerable: true,
      value: 2,
      writable: true
    },
    propertyKey: "b"
  },
  {
    expected: new Error("Read access denied: c"),
    expectedToThrow: true,
    propertyKey: "c"
  }
])(
  "safeAccess: getOwnPropertyDescriptor",
  ({ expected, expectedToThrow, propertyKey }) => {
    expect(() =>
      reflect.getOwnPropertyDescriptor(safeObj1(), propertyKey)
    ).executionResultToBe(expected, expectedToThrow);
  }
);

test.each([
  { expected: true, propertyKey: "a" },
  { expected: true, propertyKey: "b" },
  { expected: false, propertyKey: "c" }
])("safeAccess: has", ({ expected, propertyKey }) => {
  expect(reflect.has(safeObj1(), propertyKey)).toBe(expected);
});

test("safeAccess: isExtensible", () => {
  expect(reflect.isExtensible(safeObj2())).toBeTrue();
});

test("safeAccess: ownKeys", () => {
  expect(reflect.ownKeys(safeObj1())).toStrictEqual(["a", "b"]);
});

test.each([
  { expected: true, propertyKey: "a", value: 2 },
  {
    expected: new Error("Type check failed: a"),
    expectedToThrow: true,
    propertyKey: "a",
    value: false
  },
  {
    expected: new Error("Write access denied: b"),
    expectedToThrow: true,
    propertyKey: "b",
    value: 3
  },
  {
    expected: new Error("Write access denied: c"),
    expectedToThrow: true,
    propertyKey: "c",
    value: 4
  }
])("safeAccess: set", ({ expected, expectedToThrow, propertyKey, value }) => {
  expect(() => reflect.set(safeObj1(), propertyKey, value)).executionResultToBe(
    expected,
    expectedToThrow
  );
});

test("wait", async () => {
  expect.hasAssertions();
  await testUtils.run(async () => {
    await expect(async () => {
      await wait(1000);
    }).executionTimeToBe(1000);
  });
});

test.each([
  {
    expected: undefined,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.apply(new Proxy<() => void>(fn.noop, handler), undefined, [])
  },
  {
    expected: new TestClass(),
    subtest: (handler: ProxyHandler<object>) =>
      reflect.construct(new Proxy<typeof TestClass>(TestClass, handler), [])
  },
  {
    expected: true,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.defineProperty(new Proxy(new TestClass(), handler), "value", {})
  },
  {
    expected: true,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.deleteProperty(new Proxy(new TestClass(), handler), "value")
  },
  {
    expected: 1,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.get(new Proxy(new TestClass(), handler), "value")
  },
  {
    expected: descriptor,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.getOwnPropertyDescriptor(
        new Proxy(new TestClass(), handler),
        "value"
      )
  },
  {
    expected: TestClass.prototype,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.getPrototypeOf(new Proxy(new TestClass(), handler))
  },
  {
    expected: true,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.has(new Proxy(new TestClass(), handler), "value")
  },
  {
    expected: true,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.isExtensible(new Proxy(new TestClass(), handler))
  },
  {
    expected: ["value"],
    subtest: (handler: ProxyHandler<object>) =>
      reflect.ownKeys(new Proxy(new TestClass(), handler))
  },
  {
    expected: true,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.preventExtensions(new Proxy(new TestClass(), handler))
  },
  {
    expected: true,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.set(new Proxy(new TestClass(), handler), "value", 1)
  },
  {
    expected: true,
    subtest: (handler: ProxyHandler<object>) =>
      reflect.setPrototypeOf(new Proxy(new TestClass(), handler), null)
  }
])("wrapProxyHandler: doDefault", ({ expected, subtest }) => {
  const handler = wrapProxyHandler("test", ProxyHandlerAction.doDefault, {});

  expect(subtest(handler)).toStrictEqual(expected);
});

test.each([
  {
    error: new Error("Not implemented: test.apply"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.apply(new Proxy<() => void>(fn.noop, handler), undefined, []);
    }
  },
  {
    error: new Error("Not implemented: test.construct"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.construct(new Proxy<typeof TestClass>(TestClass, handler), []);
    }
  },
  {
    error: new Error("Not implemented: test.defineProperty"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.defineProperty(new Proxy(new TestClass(), handler), "value", {});
    }
  },
  {
    error: new Error("Not implemented: test.deleteProperty"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.deleteProperty(new Proxy(new TestClass(), handler), "value");
    }
  },
  {
    error: new Error("Not implemented: test.get"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.get(new Proxy(new TestClass(), handler), "value");
    }
  },
  {
    error: new Error("Not implemented: test.getOwnPropertyDescriptor"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.getOwnPropertyDescriptor(
        new Proxy(new TestClass(), handler),
        "value"
      );
    }
  },
  {
    error: new Error("Not implemented: test.getPrototypeOf"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.getPrototypeOf(new Proxy(new TestClass(), handler));
    }
  },
  {
    error: new Error("Not implemented: test.has"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.has(new Proxy(new TestClass(), handler), "value");
    }
  },
  {
    error: new Error("Not implemented: test.isExtensible"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.isExtensible(new Proxy(new TestClass(), handler));
    }
  },
  {
    error: new Error("Not implemented: test.ownKeys"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.ownKeys(new Proxy(new TestClass(), handler));
    }
  },
  {
    error: new Error("Not implemented: test.preventExtensions"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.preventExtensions(new Proxy(new TestClass(), handler));
    }
  },
  {
    error: new Error("Not implemented: test.set"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.set(new Proxy(new TestClass(), handler), "value", 1);
    }
  },
  {
    error: new Error("Not implemented: test.setPrototypeOf"),
    subtest: (handler: ProxyHandler<object>): void => {
      reflect.setPrototypeOf(new Proxy(new TestClass(), handler), null);
    }
  }
])("wrapProxyHandler: throw", ({ error, subtest }) => {
  const handler = wrapProxyHandler("test", ProxyHandlerAction.throw, {});

  expect(() => {
    subtest(handler);
  }).toThrow(error);
});
