# Photon Swap

A TypeScript implementation for executing swaps on Solana using the Photon Protocol with PumpFun integration.

## Overview

Photon Swap is a decentralized exchange (DEX) integration that facilitates token swaps on the Solana blockchain. It specifically implements PumpFun swaps with built-in fee management through the Photon protocol.


## Have a project in mind? Ping me if you need help!

[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:cashblaze129@gmail.com)
[![Telegram](https://img.shields.io/badge/Telegram-0088cc?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/cashblaze127)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discordapp.com/users/965772784653443215)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/legend-keyvel-alston)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cashblaze127)

- Example Transaction: [View on Solscan](https://solscan.io/tx/4D1KSAd9B4TzPwF5UQBEhciffDchxxSsiFpJa5HYyYEdzequ3U4c3kSjkYdPJKpr4kzhBfxARu4wFLgtF3Detx5W)

- Screenshot of the transaction:
- ![image](https://github.com/user-attachments/assets/c8d3e57f-517e-45c2-a00e-5c45ed3b0bbe)


## Features

- **Photon Protocol Integration**: Implements swap functionality using the Photon Program (`BSfD6SHZigAfDWSjzD5Q41jw8LmKwtmjskPH9XW1mrRW`)
- **PumpFun Support**: Direct integration with PumpFun protocol for token swaps
- **Automatic Token Account Creation**: Creates Associated Token Accounts (ATAs) if they don't exist
- **Fee Management**: 
  - Handles Photon protocol fees
  - Includes BloxRoute integration for transaction routing
  - Implements priority fees for better transaction success rates
- **Transaction Optimization**: 
  - Compute budget management
  - Priority fee settings
  - Transaction simulation before submission

## Technical Details

### Key Components

- **Program IDs**:
  - Photon Program: `BSfD6SHZigAfDWSjzD5Q41jw8LmKwtmjskPH9XW1mrRW`
  - PumpFun Program: `6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`

- **Fee Structure**:
  - Photon Fee Vault: `AVUCZyuT35YSuj4RH7fwiyPu82Djn2Hfg7y2ND2XcnZH`
  - PumpFun Fee Recipient: `62qc2CNXwrYqQScmEdiZFFAnJR262PxWEwNQtxfafNgV`
  - BloxRoute Fee: 0.06 SOL per transaction

### Prerequisites

- Node.js
- TypeScript
- Solana Web3.js
- SPL Token Library
- BloxRoute Solana Trader Client

### Environment Variables

```env
SOLANA_PRIVATE_KEY=<your-private-key>
```

## Installation

```bash
npm install
```

## Usage

1. Set up your environment variables in `.env`
2. Run the application:

```bash
npm dev
```

## Transaction Flow

1. **Initialization**:
   - Creates keypair from private key
   - Establishes connection to Solana network
   - Validates token accounts

2. **Swap Execution**:
   - Sets compute budget and priority fees
   - Creates Associated Token Account if needed
   - Constructs swap instruction with Photon protocol
   - Handles fee transfers
   - Simulates transaction
   - Submits and confirms transaction

## Security Considerations

- Private keys should be securely stored in environment variables
- Transaction simulation is performed before submission
- Compute budget is properly configured to prevent transaction failures
- Slippage protection is implemented (default: 1000 basis points)

## Dependencies

- `@solana/web3.js`
- `@solana/spl-token`
- `@bloxroute/solana-trader-client-ts`
- `bs58`
- `dotenv`
