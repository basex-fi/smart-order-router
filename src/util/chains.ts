import { Token } from "@basex-fi/sdk-core";

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = "ETH",
  MATIC = "MATIC",
  CELO = "CELO",
  GNOSIS = "XDAI",
  MOONBEAM = "GLMR",
  BNB = "BNB",
  AVALANCHE = "AVAX",
}

export const NATIVE_NAMES_BY_ID: string[] = [
  "ETH",
  "ETHER",
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
];

export const NATIVE_CURRENCY = NativeCurrencyName.ETHER;

export const TO_PROVIDER = (): string => process.env.JSON_RPC_PROVIDER_BASE!;

export const WRAPPED_NATIVE_CURRENCY: Token = new Token(
  "0x4200000000000000000000000000000000000006",
  18,
  "WETH",
  "Wrapped Ether",
  "https://assets.smold.app/api/token/8453/0x4200000000000000000000000000000000000006/logo.svg"
);
