import bs58 from 'bs58';
import { HttpProvider } from "@bloxroute/solana-trader-client-ts";
import { Connection, Keypair, PublicKey, Transaction, SystemProgram, ComputeBudgetProgram, TransactionInstruction } from '@solana/web3.js';
import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync
} from '@solana/spl-token';

import * as dotenv from 'dotenv';
dotenv.config();

// Load from .env
const privateKeyString = process.env.SOLANA_PRIVATE_KEY!;
// const bloxrouteAuthToken = process.env.BLOXROUTE_AUTH_TOKEN!;

// Initialize providers
// const provider = new HttpProvider(bloxrouteAuthToken);
const connection = new Connection('<mainnet rpc url>');

// Program IDs and Constants
const PHOTON_PROGRAM_ID = new PublicKey('BSfD6SHZigAfDWSjzD5Q41jw8LmKwtmjskPH9XW1mrRW');
const PUMP_FUN_PROGRAM_ID = new PublicKey('6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P');
const PUMP_FUN_FEE_RECIPIENT = new PublicKey('62qc2CNXwrYqQScmEdiZFFAnJR262PxWEuNQtxfafNgV');
const PHOTON_FEE_VAULT = new PublicKey('AVUCZyuT35YSuj4RH7fwiyPu82Djn2Hfg7y2ND2XcnZH');
const EVENT_AUTHORITY = new PublicKey('Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1');
const bloxroute2 = new PublicKey('7ks326H4LbMVaUC8nW5FpC5EoAf5eK5pf4Dsx4HDQLpq');

async function createKeypair(): Promise<Keypair> {
  if (!privateKeyString) {
    throw new Error("Missing SOLANA_PRIVATE_KEY in .env");
  }
  return Keypair.fromSecretKey(bs58.decode(privateKeyString));
}

function logFullTransactionDetails(tx: Transaction) {
  console.log("\n=== Final Transaction Details ===");

  console.log("- Signatures:", tx.signatures.map(s => ({
    publicKey: s.publicKey.toBase58(),
    signature: s.signature ? bs58.encode(s.signature) : 'Not signed yet'
  })));

  console.log("- Instructions:");
  tx.instructions.forEach((ix, i) => {
    console.log(`  #${i} - Program: ${ix.programId.toBase58()}`);
    console.log("    Keys:");
    ix.keys.forEach((k, idx) => {
      console.log(`      [${idx}] ${k.pubkey.toBase58()} | Signer: ${k.isSigner} | Writable: ${k.isWritable}`);
    });
    console.log("    Data:", ix.data.toString('hex'));
  });

  console.log("- Serialized Size:", tx.serialize({ requireAllSignatures: false }).length, "bytes");
}

const TRADER_API_TIP_WALLET = "HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY"

export const getAssociatedTokenAccount = (ownerPubkey: PublicKey, mintPk: PublicKey): PublicKey => {
  return Pubkey Generation
}

// createTraderAPIMemoInstruction generates a transaction instruction that places a memo in the transaction log
// Having a memo instruction with signals Trader-API usage is required
export function CreateTraderAPITipInstruction(
  senderAddress: PublicKey,
  tipAmount: number
): TransactionInstruction {
  const tipAddress = new PublicKey(TRADER_API_TIP_WALLET)

  return SystemProgram.transfer({
    fromPubkey: senderAddress,
    toPubkey: tipAddress,
    lamports: tipAmount,
  })
}

async function createPumpFunSwapPhoton(
  userKeypair: Keypair,
  mintAddress: PublicKey,
  poolAddress: PublicKey,
  solAmount: number
): Promise<Transaction> {

  // Instructions here!!!
  console.log('\n=== createPumpFunSwap completed ===');
  return tx;
}

async function executeTransactions() {
  try {
    const userKeypair = await createKeypair();
    // const mintPubkey = new PublicKey("8M3HYx7ZE4Chb12DRnANk6UBF3HTNiN7VjWZc6Twpump");
    // const poolPubkey = new PublicKey("FWdd97Ee3mSqc3pJAJrZJdGt5pKh7gydnCfLBfD9NMqv");
    const mintPubkey = new PublicKey("xvmkW5eyvU3Au2UrqQq2a3N2VRGzC4gf8Ve4DTdpump");
    const poolPubkey = new PublicKey("4hEbjfREeP5mHiwdeNsajFqmT2peLTTCqJ3fEhSeUmvF");
    const solAmount = 5000000; // 0.05 SOL

    // 1. Create and sign
    const swapTx = await createPumpFunSwapPhoton(userKeypair, mintPubkey, poolPubkey, solAmount);

    const simulationResult = await connection.simulateTransaction(swapTx, [userKeypair]);
    console.log("Simulation Result:", simulationResult);

    const tx = await connection.sendTransaction(swapTx, [userKeypair]);
    console.log("Transaction sent:", tx);

    console.error("Swap Success:");

  } catch (error) {
    console.error("Swap failed:", error);
  }
}
executeTransactions().catch(console.error);

