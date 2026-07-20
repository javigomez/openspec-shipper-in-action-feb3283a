import test from "node:test";
import assert from "node:assert/strict";
import { greeting } from "../src/hello.js";

test("returns the default hello world greeting", () => {
  assert.equal(greeting(), "Hello, world!");
});

test("returns a named greeting", () => {
  assert.equal(greeting("Ada"), "Hello, Ada!");
});

test("falls back to world for a blank name", () => {
  assert.equal(greeting("   "), "Hello, world!");
});

test("returns a Spanish greeting", () => {
  assert.equal(greeting("Ada", "es"), "Hola, Ada!");
});

test("returns the default Spanish greeting for a blank name", () => {
  assert.equal(greeting("   ", "es"), "Hola, mundo!");
});

test("falls back to English for an unknown language", () => {
  assert.equal(greeting("Ada", "fr"), "Hello, Ada!");
});

test("shouts an English greeting", () => {
  assert.equal(greeting("Ada", "en", true), "HELLO, ADA!");
});

test("shouts a Spanish greeting", () => {
  assert.equal(greeting("Ada", "es", true), "HOLA, ADA!");
});

test("does not shout by default", () => {
  assert.equal(greeting("Ada", "es"), "Hola, Ada!");
});
