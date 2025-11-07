enum EnumRealm {
  Grey = "#5e6b73",
  Black = "#12171a",
  Green = "#1ec82d",
}

const Realm = {
  Grey: "#5e6b73",
  Black: "#12171a",
  Green: "#1ec82d",
  Pink: "#e05be7",
  Yellow: "#d1c800",
  Violet: "#a100c7",
  White: "#e7ebec",
  Red: "#c41d3a",
  Orange: "#ff8c1a",
  Blue: "#0084ff"
} as const;
type Realm = (typeof Realm)[keyof typeof Realm];

const HELLO_WORLD = "Hello, World!";

export { Realm, EnumRealm, HELLO_WORLD };